import {useSelector} from "react-redux";
import {
    Avatar,
    Center,
    Flex,
    Text,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    MenuDivider
} from "@chakra-ui/react";
import LogOut from "../Nav/LogOut";
import AvatarChanger from "../Nav/AvatarChanger";

const UserInfo = ({mobile}) => {

    const profile = useSelector(state => state.firebase.profile);

    return (
        <>
            {mobile
                ?
                <>
                    <Menu >
                        <MenuButton as={Avatar} size='sm' src={profile.avatar} bg={'gray.600'} mx={'15px'} my={'7px'} >
                        </MenuButton>
                        <MenuList>
                            <MenuGroup title='Profile'>
                                <MenuItem>
                                        {profile.name}
                                </MenuItem>
                                <MenuItem><AvatarChanger/></MenuItem>
                            </MenuGroup>
                            <MenuDivider/>
                            <MenuItem>
                                <LogOut mobile/>
                            </MenuItem>

                        </MenuList>
                    </Menu>
                </>
                :
                <>
                    <Flex alignItems={'center'} bg={'red-500'} border="1px" borderColor="gray.200" rounded={'lg'}>
                        <Avatar size='xs' src={profile.avatar} bg={'gray.600'} mx={'15px'} my={'7px'}/>
                        <Text mr={'20px'} fontWeight={'bold'}> {profile.name}</Text>
                    </Flex>
                    <Center mx={'10px'}>
                        <LogOut/>
                    </Center>
                </>
            }


        </>
    );
}
;

export default UserInfo;
