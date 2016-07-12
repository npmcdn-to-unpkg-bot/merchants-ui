import React, {Component} from 'react';
import { Link } from 'react-router';


export default class ForgotPassword extends Component {
    render() {
        return (
       <div className="container">
                <div className="row">
                    <div className="panel-heading">
                        <div className="panel-title text-center">
                            <h1 className="title">Forgot Password</h1>
                            <hr />
                        </div>
                    </div>
                    <div className="main-login main-center">
                        <form className="form-horizontal" method="post" action="#">
                            <div className="form-group">
                                <label htmlFor="username" className="cols-sm-2 control-label">Password</label>
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-users fa" aria-hidden="true"></i></span>
                                        <input type="text" className="form-control" name="username" id="username"  placeholder="Enter your Username"/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="cols-sm-2 control-label">Retype Password</label>
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                        <input type="password" className="form-control" name="password" id="password"  placeholder="Enter your Password"/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group ">
                                <button type="button" className="btn-primary btn-lg btn-block login-button">Submit</button>
                            </div>
                            <div className="text-center">
                            <Link to="forgot-password">
                           <label>Forgot Password?</label>
                           </Link>
                           </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
