import {
    Button,
    FormControl, FormLabel, IconButton, Input, InputGroup, InputLeftAddon,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay, Tooltip, useDisclosure
} from "@chakra-ui/react";
import {AddIcon} from "@chakra-ui/icons";
import {useRef} from "react";
import {useForm} from "react-hook-form";
import {useFirebase} from "react-redux-firebase";
import {useSelector} from "react-redux";

const NewChannelModal = ({mobile}) => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const initialRef = useRef();
    const firebase = useFirebase();
    const profile = useSelector(state => state.firebase.profile);
    const {register, handleSubmit, reset} = useForm();

    const onSubmit = ({channelName, description}) => {
        firebase.push("channels", {
            channelName,
            description,
            createdBy: {
                name: profile.name,
                avatar: profile.avatar,
            },
        });
        resetFieldsAndClose();
    }
    const resetFieldsAndClose = () => {
        onClose(isOpen);
        reset();
    }

    return (
        <>
            <Tooltip label={'Create new channel'} aria-label='a tooltip'>
                {
                    mobile ? <Button bg={'none'} w='100%' rightIcon={<AddIcon/>} size={'xs'} > Create New Channel
                        </Button>
                        : <IconButton aria-label={'New channel'} size='xs'  colorScheme="purple" icon={<AddIcon/>} onClick={onOpen}/>

                }

            </Tooltip>
            <Modal
                initialFocusRef={initialRef}
                isOpen={isOpen}
                onClose={onClose}
                isCentered
            >
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Create new channel</ModalHeader>
                    <ModalCloseButton onClick={resetFieldsAndClose}/>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <ModalBody pb={6}>
                            <FormControl isRequired>
                                <FormLabel>Channel Name</FormLabel>
                                <InputGroup>
                                    <InputLeftAddon children={'#'}/>
                                    <Input ref={initialRef} placeholder="Channel name"
                                           {...register('channelName', {required: 'true'})}
                                    />
                                </InputGroup>
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Description</FormLabel>
                                <Input placeholder="Description"  {...register('description')}/>
                            </FormControl>

                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme="purple" w='80px' mr={3} type='submit'>
                                Save
                            </Button>
                            <Button onClick={resetFieldsAndClose} w='80px'>Cancel</Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    );
};

export default NewChannelModal;
