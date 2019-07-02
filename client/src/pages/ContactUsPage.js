import React, { Component } from 'react';
import { connect } from 'react-redux'; 

class ContactUsPage extends Component {

  render() {
    return (
      <div className="mission-container">
        <div className="mission-tag-line"> 
          <h1> Contact </h1>
          <h2> Under Construction </h2>
        </div>
      </div>
    );
  }
}


export default connect()(ContactUsPage);
