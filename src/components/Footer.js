import React, { Component } from 'react';
import '../styles/Footer.scss';

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
          Privacy Policy | Terms & Conditions | Careers | Contact Us
        </div>
      </div>
    );
  }
}

export default Footer;
