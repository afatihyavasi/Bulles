import {useRef, useEffect} from "react";
import {useFirebaseConnect} from "react-redux-firebase";
import {useSelector} from "react-redux";
import {
    Text, Flex, Avatar, Box, Divider,
    useColorModeValue, Tag, TagLabel, Image, Link
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

    const channelMessages = useSelector(state => state.firebase.ordered.channelMessages);
    const users = useSelector(state => state.firebase.ordered.users);
    const timeFromNow = timeStamp => moment(timeStamp).fromNow();
    const timeColor = useColorModeValue('gray.400', 'gray.500');
    const isMedia = value => value.hasOwnProperty("image");
    const lastMessageRef = useRef(null);

    /*For scroll end of the page when new message arrive */
    useEffect(() => {
        lastMessageRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'end'
        })
    })

    const findUserAvatar = (userName) => {
        const avatar = users?.find((user)=>{
            if(user.value.name === userName) return user.value.avatar;
        })

        return avatar?.value.avatar;
    }

    return (
        <div style={{overflow: 'auto', width: '100%'}}>
            {channelMessages && channelMessages.map(({key, value}) => {
                return (
                    <>
                        {/*// message Author and timestamp*/}
                        <Box my={'5px'} key={key}>
                            <Flex align={'center'}>
                                <Tag colorScheme={value.user.color} mx={'5px'}>
                                    <Avatar bg={'gray.600'} src={findUserAvatar(value.user.name)} size={'2xs'}
                                            ml={'2px'}/>
                                    <TagLabel ml={'5px'}>{value.user.name}</TagLabel>
                                </Tag>
                                <Text fontSize={"xs"}
                                      color={timeColor}>
                                    {timeFromNow(value.timestamp)}</Text>
                            </Flex>

                            <Flex>
                                {isMedia(value) ? <Link href={value.image} isExternal><Image htmlWidth={'400px'}
                                                                                             htmlHeight={'300px'}
                                                                                             rounded={'sm'}
                                                                                             m={'5px'}
                                                                                             src={value.image}
                                                                                             alt={`${value.user.name} send it`}
                                                                                             cursor={'pointer'}
                                    /></Link>
                                    : <Text m={'5px'}>{value.content}</Text>
                                }
                            </Flex>
                            <Divider/>
                        </Box>
                    </>
                )
            })}
            <div ref={lastMessageRef}></div>
        </div>

    );
};

export default Messages;
