import {Box, Flex, useColorModeValue} from '@chakra-ui/react';
import SidePanel from "../components/Chat/SidePanel";
import ChatArea from "../components/Chat/ChatArea";
import {useSelector} from "react-redux";
import ChatNav from "../components/Chat/Web/ChatNav";
import ChatNavMobile from "../components/Chat/Mobile/ChatNavMobile";
import WithoutChannel from "../components/Chat/WithoutChannel";

function App() {
    const currentChannel = useSelector(state => state.channelReducer.currentChannel);
    return (
        <>
            {/*Web*/}
            <Box display={['none', 'block']}>
                <Flex>
                    <Box h='100vh' w={'12%'}
                         display={['none', 'none', 'block']}
                         bg={useColorModeValue('gray.50', 'gray.500')}>
                        <SidePanel/>
                    </Box>
                    <Box h='100vh' w={['0', '100%', '88%']}>
                        <ChatNav/>
                        {currentChannel
                            ? <ChatArea currentChannel={currentChannel}/>
                            : <WithoutChannel/>
                        }
                    </Box>
                </Flex>
            </Box>

            {/*Mobile*/}
            <Box display={['block', 'none']}>
                <Flex direction={'column'}>
                    <ChatNavMobile/>
                    {currentChannel
                        ? <ChatArea currentChannel={currentChannel} mobile/>
                        : <WithoutChannel/>
                    }
                </Flex>
            </Box>
        </>
    )
}

export default App;

