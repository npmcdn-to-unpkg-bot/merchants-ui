import React, {Component} from 'react';
import { Link } from 'react-router';


export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-default" role="navigation">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand">Biyaheroes</a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown">Menu
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link to="login">
                                            <label>Login</label>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="register">
                                            <label>Register</label>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="add-merchant">
                                            <label>Add Merchant</label>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

