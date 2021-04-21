import {
    Button,
    FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputLeftAddon,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay, useDisclosure
} from "@chakra-ui/react";
import {AddIcon} from "@chakra-ui/icons";
import {useRef} from "react";
import {useForm} from "react-hook-form";
import {useFirebase} from "react-redux-firebase";


const NewChannelModal = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const initialRef = useRef();
    const firebase = useFirebase();
    const {register, handleSubmit, formState: {errors}, reset} = useForm();

    const onSubmit = ({channelName, description}) => {
        firebase.push("channels", {
            channelName,
            description,
        });
        reset();

    }

    return (
        <>
            <Button rightIcon={<AddIcon/>} size={'xs'} onClick={onOpen}>New Channel</Button>
            <Modal
                initialFocusRef={initialRef}
                isOpen={isOpen}
                onClose={onClose}
                isCentered
            >
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Create new channel</ModalHeader>
                    <ModalCloseButton/>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <ModalBody pb={6}>

                            <FormControl isInvalid={errors.channelName} isRequired>
                                <FormLabel>Channel Name</FormLabel>
                                <InputGroup>
                                    <InputLeftAddon children={'#'}/>
                                    <Input ref={initialRef} placeholder="Channel name"
                                           {...register('channelName', {required: 'true'})}
                                    />
                                </InputGroup>
                                <FormErrorMessage>
                                    {errors.channelName && "Channel name be a required"}
                                </FormErrorMessage>
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Description</FormLabel>
                                <Input placeholder="Description"  {...register('description')}/>
                            </FormControl>

                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme="purple" w='80px' mr={3} type='submit' onClick={onClose}>
                                Save
                            </Button>
                            <Button onClick={onClose} w='80px'>Cancel</Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    );
};

export default NewChannelModal;
