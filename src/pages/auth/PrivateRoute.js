import React from "react";
import { Route} from "react-router-dom";
import { isLoaded, isEmpty } from "react-redux-firebase";
import { useSelector } from "react-redux";
import Fallback from "../Fallback";

const PrivateRoute = ({ children, ...rest }) => {
    const auth = useSelector((state) => state.firebase.auth);
    return (
        <Route
            {...rest}
            render={() =>
                isLoaded(auth) && !isEmpty(auth) ? children : <Fallback />
            }
        />
    );
};
export default PrivateRoute;