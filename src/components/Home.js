import React, {Component} from 'react';
import { Link } from 'react-router';
import Login from './Users/Login';

export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Login />
                </div>
            </div>
        );
    }
}

