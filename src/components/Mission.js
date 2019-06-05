import React, { Component } from 'react';
import '../styles/Mission.scss';
import { connect } from 'react-redux'; 
import StarRatings from 'react-star-ratings';

class Mission extends Component {
  state = {

  }

  render() {
    const { doors, featured } = this.props;
    const { color } = this.state;
    const ftDoor = doors[featured[0]];

    return (
      <div className="MissionContainer">
        <div className="MissionTagLine"> 
          <h1> Don’t even hesitate. Don’t even worry. </h1>
          <h1> Don’t even give it a second thought. </h1>
        </div>
        <div className="MissionTagLine">
          <h1> Get in here quick, Get out quicker,  </h1>
          <h1> with an arm of fake doors in your arms. </h1>
        </div>
        <div className="MissionDetails">
          <h4> Founded in 2014,  Real Fake Doors is dedicated to bringing  </h4>
          <h4> the highest quality fake doors to your establishment.  </h4>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ doors, featured }) {
  return { doors: doors, featured: featured };
}

export default connect(mapStateToProps)(Mission);
