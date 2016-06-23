import React, {Component} from 'react';
import { Link } from 'react-router';


let biyaheroesLogo = require('../images/biyaheroes.png');


export default class Register extends Component {
    render() {
        return (
            <form className="log-in-form center">
                
                    <h3>Register</h3>
                    <img src={biyaheroesLogo}/>
                <div className="form-group">
                    <label>First Name:</label>
                    <input type="email" class="form-control" id="inputEmail" placeholder="First Name"/>
                </div>
                <div className="form-group">
                     <label>Lastt Name:</label>
                    <input type="password" class="form-control" id="inputPassword" placeholder="Last Name"/>
                </div>

                <div className="form-group">
                     <label>Email:</label>
                    <input type="password" class="form-control" id="inputPassword" placeholder="Email"/>
                </div>

                <div className="form-group">
                     <label>Username:</label>
                    <input type="password" class="form-control" id="inputPassword" placeholder="Username"/>
                </div>

                <div className="form-group">
                     <label>Password:</label>
                    <input type="password" class="form-control" id="inputPassword" placeholder="Password"/>
                </div>

                <div className="form-group">
                     <label>Retype Password:</label>
                    <input type="password" class="form-control" id="inputPassword" placeholder="Retype Password"/>
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
