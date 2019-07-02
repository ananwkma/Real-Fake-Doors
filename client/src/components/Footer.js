import React, { Component } from 'react';
import '../styles/Footer.scss';
import { Link } from 'react-router-dom';

class Footer extends Component {

  render() {
    return (
      <div className="footer-container">
        <div className="icon-container">
          <a href="https://google.com/"> <ion-icon name="logo-facebook"></ion-icon> </a>
          <a href="https://google.com/"> <ion-icon name="logo-twitter"></ion-icon> </a>
          <a href="https://google.com/"> <ion-icon name="logo-instagram"></ion-icon> </a>
        </div>
        <div className="footer-details">
          © 2000-2019 Real Fake Doors, LLC. All Rights Reserved. 
        </div>
        <div className="footer-links-container"> 
          <Link to="/privacy" className="footer-link"> Privacy Policy </Link>
          <h2> | </h2>
          <Link to="/terms" className="footer-link"> Terms & Conditions </Link>
          <h2> | </h2>
          <Link to="/careers" className="footer-link"> Careers </Link>
          <h2> | </h2>
          <Link to="/contact" className="footer-link"> Contact Us </Link>
        </div>
      </div>
    );
  }
}

export default Footer;
