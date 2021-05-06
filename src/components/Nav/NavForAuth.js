import {Flex} from "@chakra-ui/react";
import DarkModeToggle from "./DarkModeToogle";
import BackToHome from "./BackToHome";

const NavForAuth = () => {
    return (
        <Flex justifyContent={'space-around'} w={'100%'}>
                <BackToHome />
                <DarkModeToggle/>
        </Flex>
    );
};

export default NavForAuth;

