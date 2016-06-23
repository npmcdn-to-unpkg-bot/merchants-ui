import React, {Component} from 'react';
import { Link } from 'react-router';

let biyaheroesLogo = require('../images/biyaheroes.png');

export default class Login extends Component {
    render() {
        return (
            <form className="log-in-form center">
                <div className="form-group">
                    <h3>Log In</h3>
                    <img src={biyaheroesLogo}/>

                    <input type="email" class="form-control" id="inputEmail" placeholder="Username"/>
                </div>
                <div className="form-group">

                    <input type="password" class="form-control" id="inputPassword" placeholder="Password"/>
                </div>
                <div className="checkbox">
                    <input type="checkbox"/>Remember me
                </div>
                <Link to="login">
                    <button type="submit" className="btn btn-primary">Login</button>
                </Link>
                <Link to="register">
                    <button type="submit" className="btn btn-primary">Register</button>
                </Link>
            </form>

        )
    }
}
