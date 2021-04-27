import {Box, Divider, Flex, useColorModeValue} from '@chakra-ui/react';
import SidePanel from "../components/Chat/SidePanel";
import ChatArea from "../components/Chat/ChatArea";
import {useSelector} from "react-redux";
import ChatNav from "../components/Chat/Web/ChatNav";

import ChatNavMobile from "../components/Chat/Mobile/ChatNavMobile";
import CurrentChannelInfoBar from "../components/Chat/CurrentChannelInfoBar";

function App() {
    const currentChannel = useSelector(state => state.channelReducer.currentChannel);
    return (
        <>
            {/*Web*/}
            <Box display={['none', 'block']}>
                <Flex>
                    <Box h='100vh' w='25%' bg={useColorModeValue('gray.50', 'gray.500')}>
                        <SidePanel/>
                    </Box>
                    <Box h='100vh' w='75%'>
                        <ChatNav/>
                        {currentChannel && <ChatArea currentChannel={currentChannel}/>}
                    </Box>
                </Flex>
            </Box>

            {/*Mobile*/}
            <Box display={['block', 'none']}>
                <Flex direction={'column'}>
                    <ChatNavMobile/>
                    <Divider/>
                    {currentChannel && <ChatArea currentChannel={currentChannel}/>}
                </Flex>
            </Box>

        </>
    )

}

export default App;



//TODO:Login olunca otomatik app routing i degistirmeye calis
//TODO: Fallback , HomePage sayfalarini da tasarla
//TODO: Env ayarlarini ayarlaa
//TODO: Firebase de email tempalte de bulles linkine href ver
