import {useFirebaseConnect, isEmpty, isLoaded} from "react-redux-firebase";
import {useSelector} from "react-redux";
import {Text, Flex, Avatar, Center, Box} from '@chakra-ui/react';
import moment from "moment";

const Messages = ({currentChannel}) => {

    useFirebaseConnect([{
        path: `messages/${currentChannel.key}`,
        storeAs: 'channelMessages'
    }]);
    const channelMessages = useSelector(state => state.firebase.ordered.channelMessages);

    const timeFromNow = timeStamp => moment(timeStamp).fromNow();

    return (
        <div>
            {channelMessages && channelMessages.map(({key, value}) => {
                return (
                    // message Author and timestamp
                    <>
                        <Flex>
                            <Avatar name={value.user.avatar} size={'2xs'}/>
                            <Text>{value.user.name}</Text>
                            <Text>{timeFromNow(value.timeStamp)}</Text>
                        </Flex>

                        <Flex>
                            {value.content}
                        </Flex>
                    </>
                )

            })
            }
        </div>
    );
};

export default Messages;
