import {Flex, Text} from "@chakra-ui/react";
import DeleteCurrentChannel from "./DeleteCurrentChannel";

const CurrentChannelInfoBar = ({currentChannel}) => {
    return (
        <>
            <Flex direction={'column'} w={'100%'} pl={'10px'} h={'10% '} bg={'red.400'} my={'0px'}>
                <Flex>
                    <Text fontWeight={'bold'}>
                        {currentChannel.channelName}
                    </Text>
                    <DeleteCurrentChannel currentChannel={currentChannel}/>
                </Flex>

                <Text>
                    {currentChannel.description}
                </Text>
                <Text>
                    {currentChannel.createdBy.name}
                </Text>
            </Flex>
        </>
    );
};

export default CurrentChannelInfoBar;
