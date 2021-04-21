import {
    Button,
    Flex,
    Text,
    Stack,
    useColorModeValue
} from "@chakra-ui/react";
import NewChannelModal from "./NewChannelModal";


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
            <Flex direction="column" align='center' mt={'250px'}>
                {
                    [...new Array(5)].map((item, index) => {
                        return (
                            <Button my={'5px'}>#Channel {index}</Button>
                        )
                    })
                }
            </Flex>

        </Flex>
    );
};

export default SidePanel;
