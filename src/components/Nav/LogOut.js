import {Icon, IconButton, useColorMode, Tooltip} from "@chakra-ui/react";
import {LogOutDarkI, LogOutLightI} from "../../assets/icons/LogOut";
import {useSelector} from "react-redux";
import {useFirebase} from "react-redux-firebase";

const LogOut = () => {
    const {colorMode} = useColorMode();
    const firebase = useFirebase();
    const profile = useSelector(state => state.firebase.profile);

    const signOut = () => {
        firebase.logout();
    }
    return (
        <>
            <Tooltip label={'Logout'}>
                <IconButton aria-label={'log-out'}
                            onClick={signOut}
                            icon={<Icon as={colorMode === "light" ? LogOutLightI : LogOutDarkI}/>}
                />


            </Tooltip>

        </>
    );
};

export default LogOut;
