import React, {Component} from 'react';

class Form extends Component {
    render() {
        return (
            <form>
                    <div className="input-group login">
                        <span className="input-group-addon" id="basic-addon">Username</span>
                            <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                         <span className="input-group-addon" id="basic-addon">Password</span>
                            <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                    </div>
            </form>
        )
    }
}

export default Form;