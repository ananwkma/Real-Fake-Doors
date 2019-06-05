import React, { Component } from 'react';
import '../styles/ToolBar.scss';
import { Link } from 'react-router-dom';

class ToolBar extends Component {

  scroll = (e) => {
    window.scrollTo(0, 0);
  }

  handleClick = (e) => {

  }

  render() {
    return (
      <div className="container">
        <div className="navLeft"> 
          <Link to='/' className="ToolLink">
            <h2 className="HomeButton" onClick={this.scroll}>Real Fake Doors</h2>
          </Link>
        </div>

        <div className="navRight"> 
          <ion-icon name="search" className="navItem" onClick={this.handleClick}></ion-icon> 
          <ion-icon name="person" className="navItem" onClick={this.handleClick}></ion-icon>
          <ion-icon name="cart" className="navItem" onClick={this.handleClick}></ion-icon>
        </div>

      </div>
    );
  }
}

export default ToolBar;
