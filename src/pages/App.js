import {Box, Stack, Flex, Text, useColorModeValue} from '@chakra-ui/react';

import SidePanel from "../components/Chat/SidePanel";
import ChatArea from "../components/Chat/ChatArea";

function App() {
    return (
        <>
            {/*Web*/}
            <Box display={['none', 'block']}>
                <Flex>
                    <Stack h='100vh' w='25%' bg={useColorModeValue('gray.50', 'gray.500')}>
                        <SidePanel/>
                    </Stack>
                    <Stack h='100vh' w='75%'>
                        <ChatArea/>
                    </Stack>
                </Flex>
            </Box>

            {/*Mobile*/}
            <Box display={['block', 'none']}>
                <Flex>
                    < Stack h='100vh' bg={'blue.500'} w='30%'>
                        < Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.Excepturi, magnam.
                        </Text>
                    </Stack>
                    <Stack h='100vh' bg='red.500' w='70%'>
                        <Text>
                            Lorem ipsum dolor sit amet.
                        </Text>
                    </Stack>
                </Flex>
            </Box>

        </>
    )

}

export default App;


//TODO:Forgot Password sayfasi tasarla
//TODO:Login olunca otomatik app routing i degistirmeye calis
//TODO: Fallback , HomePage sayfalarini da tasarla
//TODO: Env ayarlarini ayarlaa

