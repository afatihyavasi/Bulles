import {
    Button,
    Flex,
    Text,
    Stack,
    useDisclosure,
    Modal,
    ModalContent,
    ModalOverlay,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalCloseButton,
    Input,
    InputGroup,
    FormLabel,
    FormControl, InputLeftAddon,
} from "@chakra-ui/react";
import {AddIcon} from "@chakra-ui/icons";
import {useRef} from 'react';

const SidePanel = () => {

    const {isOpen, onOpen, onClose} = useDisclosure()
    const initialRef = useRef()


    return (
        <Flex direction="column" align='center'>
            <Stack>

            </Stack>
            <Stack spacing={4}>
                <Text>
                    Bulles
                </Text>
            </Stack>

            {/*New Channel Modal and trigger button start*/}
            <Stack spacing={4}>
                <Button rightIcon={<AddIcon/>} size={'xs'}  onClick={onOpen}>New Channel</Button>
                <Modal
                    initialFocusRef={initialRef}
                    isOpen={isOpen}
                    onClose={onClose}
                    isCentered
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Create new channel</ModalHeader>
                        <ModalCloseButton/>
                        <ModalBody pb={6}>
                            <FormControl>
                                <FormLabel>Channel Name</FormLabel>
                                <InputGroup>
                                    <InputLeftAddon children={'#'}/>
                                    <Input ref={initialRef} placeholder="Channel name"/>
                                </InputGroup>

                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Description</FormLabel>
                                <Input placeholder="About"/>
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                                <Button colorScheme="purple" w='80px' mr={3}>
                                    Save
                                </Button>
                                <Button onClick={onClose}  w='80px' >Cancel</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Stack>
            {/*New Modal and trigger button end*/}
        </Flex>
    );
};

export default SidePanel;
