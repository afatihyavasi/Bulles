import {Flex, Stack, Image} from "@chakra-ui/react";
import NewChannelModal from "./NewChannelModal";
import ChannelList from "./ChannelList";
import logo from '../../assets/img/bullesLogoAlt.svg'
const SidePanel = () => {

    return (
        <Flex direction="column" align='center'>


            {/*App Name or logo*/}
            <Stack  my='20px' spacing={4} boxSize={'50%'}>
                <Image src={logo}/>
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
