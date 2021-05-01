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
    MenuDivider, Link, TagLabel, Tag
} from "@chakra-ui/react";
import LogOut from "./LogOut";
import AvatarChanger from "./AvatarChanger";
import logo from '../../assets/img/bullesLogoAlt.svg';

const UserInfo = ({mobile}) => {
        const profile = useSelector(state => state.firebase.profile);
        return (
            <>
                {mobile
                    ? <>
                        <Menu>
                            <MenuButton as={Avatar} size='sm' src={profile.avatar} bg={'gray.600'} mx={'15px'} my={'7px'}>
                            </MenuButton>
                            <MenuList>
                                <MenuItem>
                                    <Tag colorScheme={profile.color} mx={'5px'}>
                                        <Avatar bg={'gray.600'} src={profile.avatar} size={'2xs'}
                                                ml={'2px'}/>
                                        <TagLabel ml={'5px'}>{profile.name}</TagLabel>
                                    </Tag>
                                </MenuItem>
                                <MenuItem><AvatarChanger/></MenuItem>

                                <MenuItem>
                                    <Link href='https://github.com/afatihyavasi' target='_blank'>
                                        Contact
                                    </Link>
                                </MenuItem>
                                <MenuDivider/>
                                <MenuItem>
                                    <LogOut mobile/>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </>
                    : <>
                        <Menu>
                            <MenuButton>
                                <Flex alignItems={'center'} bg={'red-500'} border="1px" borderColor="gray.200"
                                      rounded={'lg'}>
                                    <Avatar size='xs' src={profile.avatar} bg={'gray.600'} mx={'15px'} my={'7px'}/>
                                    <Text mr={'20px'} fontWeight={'bold'}> {profile.name}</Text>
                                </Flex>
                            </MenuButton>

                            <MenuList>
                                <MenuItem ml={'10px'}>
                                    <AvatarChanger/>
                                </MenuItem>
                            </MenuList>
                        </Menu>

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
