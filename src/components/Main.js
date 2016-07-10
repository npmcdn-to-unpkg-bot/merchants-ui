import React from 'react';
import Navigation from './Navigation.js';

export default class AppComponent extends React.Component {
  render() {
    return (
     // Put navigation component here
      <div>
        <Navigation />
      
      <div className="index">
        {this.props.children}
      </div>
      </div>
    );
  }
}


