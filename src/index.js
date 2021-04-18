import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/pages/auth/Login'
import SignUp from './components/pages/auth/SignUp'
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";

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

