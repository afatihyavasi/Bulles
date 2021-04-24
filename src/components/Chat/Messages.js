import {useFirebaseConnect} from "react-redux-firebase";
import {useSelector} from "react-redux";
import {
    Text, Flex, Avatar, Box, Divider,
    useColorModeValue, Tag, TagLabel, Image, useDisclosure,
    Modal, ModalOverlay, ModalCloseButton, ModalBody, ModalContent,ModalHeader
} from '@chakra-ui/react';
import moment from "moment";


const Messages = ({currentChannel}) => {

    useFirebaseConnect([{
        path: `messages/${currentChannel.key}`,
        storeAs: 'channelMessages'
    }]);

    useFirebaseConnect([{
        path: 'users',
        storeAs: 'users',
    }])
    const {isOpen, onOpen, onClose} = useDisclosure()

    const channelMessages = useSelector(state => state.firebase.ordered.channelMessages);
    const timeFromNow = timeStamp => moment(timeStamp).fromNow();
    const timeColor = useColorModeValue('gray.400', 'gray.500');
    const isMedia = value => value.hasOwnProperty("image");

    return (


        <div style={{overflow: 'auto', width: '100%'}}>
            {channelMessages && channelMessages.map(({key, value}) => {
                return (
                    <>
                        {/*// message Author and timestamp*/}
                        <Box my={'5px'} key={key}>
                            <Flex align={'center'}>
                                <Tag colorScheme={value.user.color} mx={'5px'}>
                                    <Avatar bg={'gray.600'} size={'2xs'} ml={'2px'}/>
                                    <TagLabel ml={'5px'}>{value.user.name}</TagLabel>
                                </Tag>

                                <Text fontSize={"xs"}
                                      color={timeColor}>
                                    {timeFromNow(value.timestamp)}</Text>
                            </Flex>

                            <Flex>
                                {isMedia(value) ? <Image htmlWidth={'400px'}
                                                         htmlHeight={'300px'}
                                                         rounded={'sm'}
                                                         m={'5px'}
                                                         src={value.image}
                                                         alt={`${value.user.name} send it`}
                                                         cursor={'pointer'}
                                                         onClick={onOpen}
                                    />
                                    : <Text m={'5px'}>{value.content}</Text>
                                }

                            </Flex>
                            <Divider/>
                        </Box>

                        {/*Image full screen modal*/}
                        <Modal onClose={onClose} size={'full'} isOpen={isOpen}>
                            <ModalOverlay/>
                            <ModalContent>
                                <ModalHeader>
                                    <Flex align={'center'}>
                                        <Tag colorScheme={value.user.color} mx={'5px'}>
                                            <Avatar bg={'gray.600'} size={'2xs'} ml={'2px'}/>
                                            <TagLabel ml={'5px'}>{value.user.name}</TagLabel>
                                        </Tag>

                                        <Text fontSize={"xs"}
                                              color={timeColor}>
                                            {timeFromNow(value.timestamp)}</Text>
                                    </Flex>
                                </ModalHeader>
                                <ModalCloseButton/>
                                <ModalBody>
                                    <Image src={value.image} boxSize={'full'}
                                           alt={`${value.user.name} send it`}/>
                                </ModalBody>
                            </ModalContent>
                        </Modal>
                    </>
                )
            })}
        </div>

    );
};

export default Messages;
