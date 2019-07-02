import React, { Component } from 'react';
import '../styles/NavBar.scss';
import { Link } from 'react-router-dom';

class NavBar extends Component {

  render() {
    return (
      <div className="nav-bar-container">
      	<Link to="/doors" className="nav-link"> 
        	<h2> Doors </h2>
        </Link>
        <Link to="/" className="nav-link">
        	<h2> Featured </h2>
        </Link>
        <Link to="/mission" className="nav-link">
        	<h2> Mission </h2>
        </Link>
      </div>
    );
  }
}

export default NavBar;
