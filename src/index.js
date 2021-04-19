import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
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
    return (
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/login" component={Login}/>
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

