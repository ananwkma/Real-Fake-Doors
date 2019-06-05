import React, { Component } from 'react';
import '../styles/Doors.scss';
import { connect } from 'react-redux'; 
import StarRatings from 'react-star-ratings';

class Doors extends Component {
  state = {

  }

  render() {
    const { doors, featured } = this.props;
    const { color } = this.state;
    const ftDoor = doors[featured[0]];

    return (
      <div className="DoorsContainer">
        <div className="FilterContainer">
          <h2> Price </h2>
          <h2> Color </h2>
        </div>
        <hr/>
        <div className="DoorsContainer">
        </div>
      </div>
    );
  }
}

function mapStateToProps({ doors, featured }) {
  return { doors: doors, featured: featured };
}

export default connect(mapStateToProps)(Doors);
