import './ScrollDown.scss';
import {useColorMode} from "@chakra-ui/react";

const ScrollDown = () => {

    const {colorMode} = useColorMode();
    return (
        <div className="container">
            <div className="field">
                <div className={colorMode === 'light' ? "scroll" : "scrollDark"}/>
            </div>
        </div>
    );
};

export default ScrollDown;
