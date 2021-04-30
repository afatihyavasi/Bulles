import {Icon, IconButton, useColorMode, Tooltip, Text} from "@chakra-ui/react";
import {LogOutDarkI, LogOutLightI} from "../../assets/icons/LogOut";
import {useFirebase} from "react-redux-firebase";

const LogOut = ({mobile}) => {
    const {colorMode} = useColorMode();
    const firebase = useFirebase();

    const signOut = () => {
        firebase.logout();
    }

    return (
        <>
            {!mobile ?
                <>
                    <Tooltip label={'Logout'}>
                        <IconButton aria-label={'log-out'}
                                    onClick={signOut}

                                    icon={<Icon as={colorMode === "light" ? LogOutLightI : LogOutDarkI}/>}
                        />
                    </Tooltip>
                </>
                :
                <>
                    <Text onClick={signOut} fontWeight={'bold'}>
                        Sign Out
                    </Text>
                </>
            }
        </>
    );
}

export default LogOut;
