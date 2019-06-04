import React, { Component } from 'react';
import '../styles/NavBar.scss';

class NavBar extends Component {

  render() {
    return (
      <div className="NavBarContainer">
        <h2> Doors </h2>
        <h2> Deals </h2>
        <h2> Mission </h2>
      </div>
    );
  }
}

export default NavBar;
