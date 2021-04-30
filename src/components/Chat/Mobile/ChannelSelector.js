import {Menu, MenuButton, MenuList, MenuItem, MenuDivider} from "@chakra-ui/react";
import {ChevronDownIcon} from "@chakra-ui/icons";
import NewChannelModal from "../NewChannelModal";
import ChannelList from "../ChannelList";

const ChannelSelector = () => {
    return (
        <>
            <Menu placement={'bottom'}>
                <MenuButton
                    px={4}
                    py={2}
                    transition="all 0.2s"
                    borderRadius="md"
                    borderWidth="1px"
                >
                    Channels <ChevronDownIcon/>
                </MenuButton>
                <MenuList w={'100%'}>
                    <MenuItem>
                        <NewChannelModal mobile/>
                    </MenuItem>
                    <MenuDivider/>
                    {/*<MenuItem w={'100%'}>*/}
                        <ChannelList mobile/>
                    {/*</MenuItem>*/}
                </MenuList>
            </Menu>
        </>
    );
};

export default ChannelSelector;
