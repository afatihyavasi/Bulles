import {
    Flex,
    Center,
    Box, useColorModeValue
} from "@chakra-ui/react";
import DarkModeToggle from "../../Nav/DarkModeToogle";
import UserInfo from "../../Nav/UserInfo";
import DraverMenu from "../DrawerMenu";
import LogOut from "../../Nav/LogOut";


const ChatNav = () => {

    return (
        <Flex h={'8vh'}
              bg={useColorModeValue('gray.50', 'gray.500')}
              justify={'space-between'}>
            <Center ml={'10px'}>
                <Box display={['none', 'block', 'none']}>
                    <DraverMenu/>
                </Box>
            </Center>

            <Center>
                <UserInfo/>
                <Box display={['block', 'none', 'block']} ml={'10px'}>
                    <DarkModeToggle/>
                </Box>
                <Box mx={'10px'}>
                    <LogOut/>
                </Box>
            </Center>
        </Flex>

    );
};

export default ChatNav;
