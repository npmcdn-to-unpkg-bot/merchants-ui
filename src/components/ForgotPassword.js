import React, {Component} from 'react';
import { Link } from 'react-router';

let biyaheroesLogo = require('../images/biyaheroes.png');

var HelloMessage = React.createClass({
  render: function() {
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
});


export default class ForgotPassword extends Component {
    render() {
        return (
        <div className="container">
            <div className="row">
           <form className="log-in-form center">
                <div className="form-group">
                    <h3>Forgot Password</h3>
                    <hr/>
                    <div className="form-group">
                    <label>New Password:</label>
                    <input type="email" class="form-control" id="inputEmail" placeholder="New Password"/>
                    </div>
                </div>
                <div className="form-group">
                     <label>Retype Password:</label>
                    <input type="password" class="form-control" id="inputPassword" placeholder="Retype Password"/>
                    <HelloMessage/>
                </div>
            </form>
            </div>
        </div>
        );
    }
}
