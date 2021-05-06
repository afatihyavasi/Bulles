import {IconButton, Tooltip, useColorMode} from "@chakra-ui/react";
import {MoonIcon, SunIcon} from "@chakra-ui/icons";

const DarkModeToggle = () => {
    const {colorMode, toggleColorMode} = useColorMode();
    return (
        <Tooltip label={colorMode === "light" ? 'Dark mode' : 'Light mode'} aria-label='a tooltip'>
            <IconButton aria-label="Dark mode toogle" onClick={toggleColorMode}
                        icon={colorMode === "light" ? <MoonIcon/> : <SunIcon/>} />
        </Tooltip>
    );
};

export default DarkModeToggle;
