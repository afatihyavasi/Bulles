import {Flex, useColorModeValue, Center, Box} from "@chakra-ui/react";
import DarkModeToggle from "../../Nav/DarkModeToogle";
import UserInfo from "../../Nav/UserInfo";
import DraverMenu from "../DrawerMenu";


const ChatNav = () => {
    return (
        <Flex h={'8vh'} bg={useColorModeValue('gray.50', 'gray.500')} justify={'space-between'}>
            <Center ml={'10px'}>
                <Box display={['block', 'none', 'block']}>
                    <DarkModeToggle/>
                </Box>

                <Box display={['none', 'block', 'none']}>
                    <DraverMenu/>
                </Box>
            </Center>

            <Center>
                <UserInfo/>
            </Center>
        </Flex>

    );
};

export default ChatNav;
