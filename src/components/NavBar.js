import React, { Component } from 'react';
import '../styles/NavBar.scss';
import { Link } from 'react-router-dom';

class NavBar extends Component {

  render() {
    return (
      <div className="NavBarContainer">
      	<Link to="/doors" className="NavLink"> 
        	<h2> Doors </h2>
        </Link>
        <Link to="/" className="NavLink">
        	<h2> Deals </h2>
        </Link>
        <Link to="/mission" className="NavLink">
        	<h2> Mission </h2>
        </Link>
      </div>
    );
  }
}

export default NavBar;
