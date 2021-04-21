import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import HomePage from "./pages/HomePage";
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import PrivateRoute from "./pages/auth/PrivateRoute";
import {BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";
import store from './store/store'
import firebase from "./firebase";
import {Provider} from 'react-redux';
import {ReactReduxFirebaseProvider} from "react-redux-firebase";



const rrfConfig = {
    userProfile: 'users'
}

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch
}

const Root = () => {
    const history = useHistory();
    useEffect(() => {
        firebase.auth().onIdTokenChanged(user => {
            if (user) {
                history.push("/app")
            } else {
                history.push("/login")
            }
        })
    }, [])
    return (
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/login" component={Login}/>
            <PrivateRoute path="/app">
                <App/>
            </PrivateRoute>
        </Switch>
    )
}


ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider>
            <Provider store={store}>
                <ReactReduxFirebaseProvider {...rrfProps}>
                    <Router>
                        <Root/>
                    </Router>
                </ReactReduxFirebaseProvider>
            </Provider>
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

