import React, { Component } from 'react';
import { connect } from 'react-redux'; 

class TermsConditionsPage extends Component {

  render() {
    return (
      <div className="MissionContainer">
        <div className="MissionTagLine"> 
          <h1> Terms & Conditions </h1>
          <h2> Under Construction </h2>
        </div>
      </div>
    );
  }
}


export default connect()(TermsConditionsPage);
