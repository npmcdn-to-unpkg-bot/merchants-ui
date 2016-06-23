require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Navigation from './Navigation.js';



export default class AppComponent extends React.Component {
  render() {
    return (
      
      // Put navigation component here
      <div className="index">
      <Navigation />
        <div className="notice">
          {this.props.children}
          
          
        </div>
      </div>
    );
  }
}


