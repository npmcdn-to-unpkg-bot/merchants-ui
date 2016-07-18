require('normalize.css/normalize.css');
require('styles/App.css');

import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

//Components 
import App from './components/Main.js';
import Register from './components/Users/Register.js';
import Home from './components/Home.js';
import Login from './components/Users/Login.js';
import Merchants from './components/Merchants/AddMerchant.js';
import ForgotPassword from './components/Users/ForgotPassword.js';
import Store from './components/Store/AddStore.js';
import Items from './components/Items/AddItems.js';
import Stocks from './components/Stocks/AddStocks.js';
import Products from './components/Products/AddProducts.js';

const app = document.getElementById('app');

// Render the main component into the dom
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="login" component={Login}></Route>
            <Route path="register" component={Register}></Route>
            <Route path="merchants" component={Merchants}></Route>
            <Route path="forgot-password" component={ForgotPassword}></Route>
            <Route path="stocks" component={Stocks}></Route>
            <Route path="items" component={Items}></Route>
            <Route path="store" component={Store}></Route>
            <Route path="products" component={Products}></Route>       
        </Route>
    </Router>,
    app);
