import {useState} from 'react'
import {Flex} from '@chakra-ui/react'
import NewMessageInput from "./NewMessageInput";
import CurrentChannelInfoBar from "./CurrentChannelInfoBar";
import Messages from "./Messages";


const ChatArea = ({currentChannel}) => {


    return (
        <Flex direction={'column'} w={'100%'} h={'92vh'}>

            {/*Channel name and desc*/}
            <CurrentChannelInfoBar currentChannel={currentChannel}/>

            {/*Messages section*/}
            <Flex h={'84%'}>
                <Messages currentChannel={currentChannel}/>
            </Flex>

            {/*Create new message*/}
            <NewMessageInput currentChannel={currentChannel}/>
        </Flex>
    );
};

export default ChatArea;
