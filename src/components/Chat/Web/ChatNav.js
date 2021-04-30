import {Flex, useColorModeValue, Center} from "@chakra-ui/react";
import DarkModeToggle from "../../Nav/DarkModeToogle";
import AvatarChanger from "../../Nav/AvatarChanger";
import UserInfo from "../../Nav/UserInfo";

const ChatNav = () => {
    return (
        <Flex h={'8vh'} bg={useColorModeValue('gray.50', 'gray.500')} justify={'space-between'}>
            <Center ml={'10px'}>
                <DarkModeToggle/>
                <AvatarChanger/>
            </Center>

            <Center>
                <UserInfo/>
            </Center>
        </Flex>

    );
};

export default ChatNav;
