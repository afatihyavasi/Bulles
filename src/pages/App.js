import {Box, Stack, Flex, Text} from '@chakra-ui/react';
import DarkModeToggle from "../components/Nav/DarkModeToogle";
import SidePanel from "../components/Chat/SidePanel";

function App() {
    return (
        <>
            {/*Web*/}
            <Box display={['none', 'block']} p='20px'>
                <Flex >
                    <Stack h='100vh' bg={'red.500'} w='25%'>
                        <SidePanel/>
                    </Stack>
                    <Stack h='100vh' bg='blue.500' w='75%'>
                        <Text>
                            Lorem ipsum dolor sit amet.
                        </Text>
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

