import React, {Component} from 'react';
import { Link } from 'react-router';


let biyaheroesLogo = require('../images/biyaheroes.png');

var FirstName = React.createClass({
    render: function(){
        return (
            <form className="form-horizontal">
                <div className="form-group">
                    <label for="inputEmail" className="control-label col-xs-2">Email</label>
                    <div className="col-xs-10">
                        <input type="email" className="form-control" id="inputEmail" placeholder="Email"/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputPassword" className="control-label col-xs-2">Password</label>
                    <div className="col-xs-10">
                        <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-xs-offset-2 col-xs-10">
                        <div className="checkbox">
                            <label><input type="checkbox"/> Remember me</label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-xs-offset-2 col-xs-10">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </div>
            </form>
        )
    }
})


export default class Register extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <form role="form">
                        <FirstName />
                    </form>
                </div>
            </div>
        )
    }
}


