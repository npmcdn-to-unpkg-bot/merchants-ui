import React, {Component} from 'react';
import { Link } from 'react-router';

let biyaheroesLogo = require('../images/biyaheroes.png');

export default class Login extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <form className="log-in-form">
                        <div className="form-group">
                            <hr/>
                            <h3>Log In</h3>
                            <img src={biyaheroesLogo}/>
                            <input type="email" class="form-control" id="inputEmail" placeholder="Username"/>
                        </div>
                        <div className="form-group">
                            <input type="password" class="form-control" id="inputPassword" placeholder="Password"/>
                        </div>
                        <div className="form-group">
                            <input type="checkbox"/>Remember me
                        </div>
                        <div className="form-group">
                            <Link to="forgot-password">
                                <label>Forgot Password?</label>
                            </Link>
                        </div>

                        <div className="form-group">
                            <Link to="login">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </Link>
                            <Link to="register">
                                <button type="submit" className="btn btn-primary">Register</button>
                            </Link>
                        </div>
                        <hr/>
                    </form>
                </div>
            </div>
        )
    }
}
