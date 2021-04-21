import {Icon, IconButton, useColorMode, Tooltip} from "@chakra-ui/react";
import {LogOutDarkI, LogOutLightI} from "../../assets/icons/LogOut";

const LogOut = () => {
    const {colorMode} = useColorMode();
    return (
        <>
            <Tooltip label={'Logout'}>
                <IconButton aria-label={'log-out'} icon={<Icon as={colorMode === "light" ? LogOutLightI : LogOutDarkI}
                                                               mx={'10px'}/>}></IconButton>
            </Tooltip>

        </>
    );
};

export default LogOut;
