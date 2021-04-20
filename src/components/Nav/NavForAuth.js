import {Flex, Stack} from "@chakra-ui/react";
import DarkModeToggle from "./DarkModeToogle";
import BackToHome from "./BackToHome";

const NavForAuth = () => {
    return (
        <Flex justifyContent={'space-between'} position="relative" top='100'>
            <Stack>
                <BackToHome/>
            </Stack>

            <Stack>
                <DarkModeToggle/>
            </Stack>
        </Flex>
    );
};

export default NavForAuth;

