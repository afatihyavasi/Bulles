import {Flex, Icon, Text, Avatar, useColorModeValue, Center, IconButton,useColorMode} from "@chakra-ui/react";
import DarkModeToggle from "../Nav/DarkModeToogle";
import {LogOutDarkI,LogOutLightI} from "../../assets/icons/LogOut";


const ChatNav = () => {
    const {colorMode} = useColorMode();
    return (

        <Flex h={'70px'} bg={useColorModeValue('gray.50','gray.500')} justify={'space-between'}>
            <Center ml={'10px'}>
                <DarkModeToggle/>
            </Center>

            <Center>
                <Flex alignItems={'center'} bg={'red-500'} border="1px" borderColor="gray.200" rounded={'lg'}>
                    <Avatar size='xs' src="https://bit.ly/broken-link" mx={'15px'} my={'7px'}/>
                    <Text mr={'20px'} fontWeight={'bold'}> Test User</Text>
                </Flex>
                <Center mx={'10px'}>
                    <IconButton aria-label={'log-out'} icon={<Icon as={colorMode === "light" ? LogOutLightI : LogOutDarkI}  mx={'10px'} />}></IconButton>
                </Center>
            </Center>
        </Flex>

    );
};

export default ChatNav;
