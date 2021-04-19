import {useColorMode, Flex, IconButton, Stack, Tooltip} from "@chakra-ui/react";
import {ArrowBackIcon, MoonIcon, SunIcon} from '@chakra-ui/icons';
import {Link} from 'react-router-dom';

const Nav = () => {
    const {colorMode, toggleColorMode} = useColorMode();
    return (
            <Flex justifyContent={'space-between'} position="relative" top='100'>
                <Stack>
                    <Link to="/">
                        <Tooltip label='Back to homepage' aria-label='a tooltip'>
                            <IconButton aria-label="Back to homepage" icon={<ArrowBackIcon/>}/>
                        </Tooltip>
                    </Link>

                </Stack>
                <Stack>
                    <Tooltip label={colorMode === "light" ? 'Dark mode': 'Light mode'} aria-label='a tooltip'>
                    <IconButton aria-label="Dark mode toogle" onClick={toggleColorMode}
                                icon={colorMode === "light" ? <MoonIcon/> : <SunIcon/>}/>
                    </Tooltip>
                </Stack>

            </Flex>
    );
};

export default Nav;

