require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Navigation from './Navigation.js';
import Form from './Form.js';

let biyaheroesLogo = require('../images/biyaheroes.png');

class AppComponent extends React.Component {
  render() {
    return (
      
      // Put navigation component here
      <div className="index">
      <Navigation />
        <img src={biyaheroesLogo}/>
        <div className="notice">
          <h5>Log In</h5>
          <Form />
          
          
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
