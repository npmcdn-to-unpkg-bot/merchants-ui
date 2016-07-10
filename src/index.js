require('normalize.css/normalize.css');
require('styles/App.css');

import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';



//Components 
import App from './components/Main.js';
import Register from './components/Register.js';
import Home from './components/Home.js';
import Login from './components/Login.js';
import AddMerchant from './components/AddMerchant.js';
import ForgotPassword from './components/ForgotPassword.js';


const app = document.getElementById('app');



// Render the main component into the dom
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="login" component={Login}></Route>
            <Route path="register" component={Register}></Route>
            <Route path="add-merchant" component={AddMerchant}></Route>
            <Route path="forgot-password" component={ForgotPassword}></Route>
        </Route>
    </Router>,
    app);
