import {Flex, Text} from "@chakra-ui/react";

const CurrentChannelInfoBar = ({currentChannel}) => {
    return (
        <>
            <Flex direction={'column'} w={'100%'} pl={'10px'} h={'10% '} bg={'red.400'} my={'0px'}>
                <Text fontWeight={'bold'}>
                    {currentChannel.channelName}
                </Text>
                <Text>
                    {currentChannel.description}
                </Text>
            </Flex>
        </>
    );
};

export default CurrentChannelInfoBar;
