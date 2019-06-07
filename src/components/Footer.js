import React, { Component } from 'react';
import '../styles/Footer.scss';
import { Link } from 'react-router-dom';

class Footer extends Component {

  render() {
    return (
      <div className="FooterContainer">
        <div className="IconContainer">
          <a href="https://google.com/"> <ion-icon name="logo-facebook"></ion-icon> </a>
          <a href="https://google.com/"> <ion-icon name="logo-twitter"></ion-icon> </a>
          <a href="https://google.com/"> <ion-icon name="logo-instagram"></ion-icon> </a>
        </div>
        <div className="FooterDetails">
          © 2000-2019 Real Fake Doors, LLC. All Rights Reserved. 
        </div>
        <div className="FooterLinksContainer"> 
          <Link to="/privacy" className="FooterLink"> Privacy Policy </Link>
          <h2> | </h2>
          <Link to="/terms" className="FooterLink"> Terms & Conditions </Link>
          <h2> | </h2>
          <Link to="/careers" className="FooterLink"> Careers </Link>
          <h2> | </h2>
          <Link to="/contact" className="FooterLink"> Contact Us </Link>
        </div>
      </div>
    );
  }
}

export default Footer;
