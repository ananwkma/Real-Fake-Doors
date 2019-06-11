import React, { Component } from 'react';
import '../styles/Door.scss';
import { connect } from 'react-redux'; 
import StarRatings from 'react-star-ratings';
import { capitalize } from '../util';

class Door extends Component {  

  render() {
    const { price, name, size, img } = this.props;

    return (
      <div className="DoorContainer">
        <img src={img}/>
        <h1> ${ price } </h1>
        <h2> { size } { capitalize(name) } </h2>
        <button className="DetailsButton"> View Details </button>
      </div>
    );
  }
}

export default connect()(Door);
