import {Flex,Center} from "@chakra-ui/react";
import DarkModeToggle from "../../Nav/DarkModeToogle";
import UserInfo from "../UserInfo";
import ChannelSelector from "./ChannelSelector";

const ChatNavMobile = () => {
    return (
        <>
            <Flex w='100%' justify={'space-around'} align={'center'} my={'10px'} >
                <Center w={'30%'}>
                    <DarkModeToggle/>
                </Center>
                <Center  w={'40%'}>
                    <ChannelSelector/>
                </Center>

                <Center  w={'30%'}>
                    <UserInfo mobile/>
                </Center>
            </Flex>
        </>
    );
};

export default ChatNavMobile;
