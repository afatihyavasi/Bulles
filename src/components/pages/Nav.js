import {useColorMode, Flex, IconButton, Stack} from "@chakra-ui/react";
import {ArrowBackIcon, MoonIcon, SunIcon} from '@chakra-ui/icons';
import {Link} from 'react-router-dom';

const Nav = () => {
    const {colorMode, toggleColorMode} = useColorMode();
    return (
        <div>
            <Flex justifyContent={'space-between'} position="relative" top='100' bg={'none'}>
                <Stack>
                    <Link to="/">
                        <IconButton aria-label="Back to homepage" icon={<ArrowBackIcon/>}/>
                    </Link>

                </Stack>
                <Stack>
                    <IconButton aria-label="Dark mode toogle" onClick={toggleColorMode}
                                icon={colorMode === "light" ? <MoonIcon/> : <SunIcon/>}/>
                </Stack>

            </Flex>
        </div>
    );
};

export default Nav;

