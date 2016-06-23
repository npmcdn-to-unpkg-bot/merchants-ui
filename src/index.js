import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './components/Main';
import Register from './components/Register';
import Home from './components/Home.js';
import Login from './components/Login.js';

const app = document.getElementById('app');



// Render the main component into the dom
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}></IndexRoute>
                <Route path="login" component={Login}></Route>
                <Route path="register" component={Register}></Route>
        </Route>
    </Router>,
    app);
