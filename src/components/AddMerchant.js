import React, {Component} from 'react';


export default class AddMerchant extends Component {
    render() {
        return (
<form className="log-in-form center">
                
                <h3>Add Merchant</h3>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="email" class="form-control" id="inputEmail" placeholder="First Name"/>
                </div>
                <div className="form-group">
                     <label>Title:</label>
                    <input type="password" class="form-control" id="inputPassword" placeholder="Last Name"/>
                </div>

                <div className="form-group">
                     <label>Description:</label>
                    <input type="password" class="form-control" id="inputPassword" placeholder="Email"/>
                </div>

                <div className="form-group">
                     <label>Model:</label>
                    <input type="password" class="form-control" id="inputPassword" placeholder="Username"/>
                </div>

                <div className="form-group">
                     <label>Status:</label>
                    <input type="password" class="form-control" id="inputPassword" placeholder="Password"/>
                </div>

                <div className="form-group">
                     <label>Tag:</label>
                    <input type="password" class="form-control" id="inputPassword" placeholder="Retype Password"/>
                </div>

                <div className="form-group">
                     <label>Store:</label>
                    <input type="password" class="form-control" id="inputPassword" placeholder="Password"/>
                </div>

                <div className="form-group">
                     <label>Logo:</label>
                    <input type="password" class="form-control" id="inputPassword" placeholder="Password"/>
                </div>

                <div className="form-group">
                     <label>Image:</label>
                    <input type="password" class="form-control" id="inputPassword" placeholder="Password"/>
                </div>

                <div className="form-group">
                     <label>Owner:</label>
                    <input type="password" class="form-control" id="inputPassword" placeholder="Password"/>
                </div>

                <div className="form-group">
                     <label>Staff:</label>
                    <input type="password" class="form-control" id="inputPassword" placeholder="Password"/>
                </div>

                <div className="form-group">
                     <label>Payment:</label>
                    <input type="password" class="form-control" id="inputPassword" placeholder="Password"/>
                </div>

                <div className="form-group">
                     <label>Discount:</label>
                    <input type="password" class="form-control" id="inputPassword" placeholder="Password"/>
                </div>

                <div className="form-group">
                     <label>State:</label>
                    <input type="password" class="form-control" id="inputPassword" placeholder="Password"/>
                </div>
             </form>
        );
    }
}
