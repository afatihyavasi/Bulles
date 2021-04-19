import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";
import firebase from "./firebase";

const Root = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/signup" component={SignUp}/>
                <Route path="/login" component={Login}/>
            </Switch>
        </Router>
    )
}


ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider>
            <Root/>
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

