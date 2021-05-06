import {Flex, Stack, Image, Text} from "@chakra-ui/react";
import NewChannelModal from "./NewChannelModal";
import ChannelList from "./ChannelList";
import logo from '../../assets/img/bullesLogoAlt.svg';

const SidePanel = () => {
    return (
        <Flex direction="column" align='center'>

            {/*App Name or logo*/}
            <Stack py='40px' boxSize={'50%'}>
                <Image src={logo}/>
            </Stack>

            {/*New Channel Modal */}
            <Flex w={'100%'} align={'center'} bg='gray.400'
                  color={'gray.100'} justify={'space-between'} p={'5px'}>
                <Text ml={'5px'} fontWeight={'semibold'}>Channels</Text>
                <NewChannelModal/>
            </Flex>

            {/*Channels*/}
            <Flex w={'100%'} justify={'center'}>
                <ChannelList/>
            </Flex>

        </Flex>
    );
};

export default SidePanel;
