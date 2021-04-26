import {Flex, Text, Avatar, useColorModeValue, Center} from "@chakra-ui/react";
import DarkModeToggle from "../Nav/DarkModeToogle";
import LogOut from "../Nav/LogOut";

import {useSelector} from "react-redux";
import AvatarChanger from "../Nav/AvatarChanger";


const ChatNav = () => {

    const profile = useSelector(state => state.firebase.profile);

    return (

        <Flex h={'8vh'} bg={useColorModeValue('gray.50', 'gray.500')} justify={'space-between'}>
            <Center ml={'10px'}>
                <DarkModeToggle/>
                <AvatarChanger/>
            </Center>

            <Center>
                <Flex alignItems={'center'} bg={'red-500'} border="1px" borderColor="gray.200" rounded={'lg'}>
                    <Avatar size='xs' src={profile.avatar} bg={'gray.600'} mx={'15px'} my={'7px'}/>
                    <Text mr={'20px'} fontWeight={'bold'}> {profile.name}</Text>
                </Flex>
                <Center mx={'10px'}>
                    <LogOut/>
                </Center>
            </Center>
        </Flex>

    );
};

export default ChatNav;
