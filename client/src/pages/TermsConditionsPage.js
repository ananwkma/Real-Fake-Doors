import React, { Component } from 'react';
import { connect } from 'react-redux'; 

class TermsConditionsPage extends Component {

  render() {
    return (
      <div className="mission-container">
        <div className="mission-tag-line"> 
          <h1> Terms & Conditions </h1>
          <h2> Under Construction </h2>
        </div>
      </div>
    );
  }
}


export default connect()(TermsConditionsPage);
