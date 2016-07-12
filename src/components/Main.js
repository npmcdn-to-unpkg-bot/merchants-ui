import React from 'react';
import Navigation from './Layouts/Navigation.js';

export default class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="index">
          {this.props.children}
        </div>
      </div>
    );
  }
}


