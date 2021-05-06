import {IconButton, Tooltip} from "@chakra-ui/react";
import {ArrowBackIcon} from "@chakra-ui/icons";
import {Link} from 'react-router-dom';

const BackToHome = () => {
    return (
        <Link to={'/'}>
            <Tooltip label={"Back to homepage"} aria-label='a tooltip'>
                <IconButton aria-label="Back to homepage" icon={<ArrowBackIcon/>}/>
            </Tooltip>
        </Link>
    );
};

export default BackToHome;
