import {Flex} from '@chakra-ui/react'
import NewMessageInput from "./NewMessageInput";
import CurrentChannelInfoBar from "./CurrentChannelInfoBar";
import Messages from "./Messages";

const ChatArea = ({currentChannel, mobile}) => {
    return (
        <Flex direction={'column'} w={'100%'} overflow={'hidden'} h={mobile ? '94vh' : '92vh'} >

            {/*Channel name and desc*/}
            <Flex>
                <CurrentChannelInfoBar currentChannel={currentChannel}/>
            </Flex>


            {/*Messages section*/}
            <Flex h={mobile ? '80vh' : '82vh'}>
                <Messages currentChannel={currentChannel}/>
            </Flex>

            {/*Create new message*/}

            <NewMessageInput currentChannel={currentChannel}/>


        </Flex>
    );
};

export default ChatArea;
