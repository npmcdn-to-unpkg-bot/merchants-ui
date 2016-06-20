require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let biyaheroesLogo = require('../images/biyaheroes.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={biyaheroesLogo}/>
        <div className="notice">
          <h5>Log In</h5>
          <input type="text" placeholder="Hello"/>
          <input type="text" placeholder="Hello"/>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
