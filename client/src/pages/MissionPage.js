import React, { Component } from 'react';
import '../styles/Mission.scss';
import { connect } from 'react-redux'; 

class MissionPage extends Component {

  render() {

    return (
      <div className="mission-container">
        <div className="mission-tag-line"> 
          <h1> Don’t even hesitate. Don’t even worry. </h1>
          <h1> Don’t even give it a second thought. </h1>
        </div>
        <div className="mission-tag-line">
          <h1> Get in here quick, Get out quicker,  </h1>
          <h1> with an arm of fake doors in your arms. </h1>
        </div>
        <div className="mission-details">
          <h4> Founded in 2014, <a href="https://www.youtube.com/watch?v=4270c5qWPBg"> Real Fake Doors </a>
           is dedicated to bringing  </h4>
          <h4> the highest quality fake doors to your establishment.  </h4>
        </div>
      </div>
    );
  }
}

export default connect()(MissionPage);
