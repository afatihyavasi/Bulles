import {
    Flex, Text, useColorModeValue, Accordion, AccordionItem,
    AccordionPanel, AccordionIcon, Box, AccordionButton, Divider, Avatar, TagLabel, Tag
} from "@chakra-ui/react";
import DeleteCurrentChannel from "./DeleteCurrentChannel";
import {useSelector} from "react-redux";

const CurrentChannelInfoBar = ({currentChannel}) => {
    const users = useSelector(state => state.firebase.ordered.users);

    const findUserData = (userName) => {
        const userData = users?.find((user)=>{
            if(user.value.name === userName) return user.value.avatar;
        })

        return userData?.value;
    }
    return (
        <>
            <Flex direction={'column'}  w={'100%'} bg={useColorModeValue('gray.200', 'purple.500')} my={'0px'}>
                <Accordion allowToggle>
                    <AccordionItem>

                        <AccordionButton >
                            <Box flex="1" textAlign="center" >
                                {currentChannel.channelName}
                            </Box>
                            <AccordionIcon/>
                        </AccordionButton>
                        <Divider/>
                        <AccordionPanel pb={4}>
                            <Flex justify={'space-between'} my={'10px'}>
                                <Text fontWeight={'bold'}>{`Created by:\u00A0`}
                                    <Tag colorScheme={findUserData(currentChannel.createdBy.name).color} mx={'5px'}>
                                        <Avatar bg={'gray.600'} src={findUserData(currentChannel.createdBy.name).avatar} size={'2xs'}
                                                ml={'2px'}/>
                                        <TagLabel ml={'5px'}>{currentChannel.createdBy.name}</TagLabel>
                                    </Tag>
                                </Text>

                                <DeleteCurrentChannel currentChannel={currentChannel}/>
                            </Flex>

                            <Text fontWeight={'semi-bold'}>{currentChannel.description}</Text>

                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>

            </Flex>
        </>
    );
};

export default CurrentChannelInfoBar;

