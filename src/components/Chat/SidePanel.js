import {
    Flex,
    Text,
    Stack,
    useColorModeValue
} from "@chakra-ui/react";
import NewChannelModal from "./NewChannelModal";
import ChannelList from "./ChannelList";

const SidePanel = () => {

    return (
        <Flex direction="column" align='center'>
            <Stack>

            </Stack>

            {/*App Name or logo*/}
            <Stack spacing={4}>
                <Text p={'50px'} fontSize={'xl'} color={useColorModeValue('purple.500', 'purple.100')}>
                    Bulles
                </Text>
            </Stack>

            {/*New Channel Modal */}
            <Stack spacing={4}>
                <NewChannelModal/>
            </Stack>

            {/*Channels*/}
            <ChannelList/>

        </Flex>
    );
};

export default SidePanel;
