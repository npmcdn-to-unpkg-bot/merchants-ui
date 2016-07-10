import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
    render() {
        return (
            <div>
                <h3>Home</h3>
                <Link to="login">
                    <button type="submit" className="btn btn-primary">Login</button>
                </Link>
                <Link to="register">
                    <button type="submit" className="btn btn-primary">Register</button>
                </Link>
            </div>
        );
    }
}

