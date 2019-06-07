import React, { Component } from 'react';
import '../styles/Door.scss';
import { connect } from 'react-redux'; 
import StarRatings from 'react-star-ratings';

class Door extends Component {

  render() {
    const { price, name, size } = this.props;

    return (
      <div className="DoorContainer">
        <img src="clear-stain-alder.jpg"/>
        <h2> { price } </h2>
        <h2> { size } { name } </h2>
      </div>
    );
  }
}

export default connect()(Door);
