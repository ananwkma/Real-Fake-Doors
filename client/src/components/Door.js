import React, { Component } from 'react';
import '../styles/Door.scss';
import { connect } from 'react-redux'; 
import StarRatings from 'react-star-ratings';

class Door extends Component {  

  capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  render() {
    const { price, name, size, img } = this.props;

    return (
      <div className="DoorContainer">
        <img src={img}/>
        <h1> ${ price } </h1>
        <h2> { size } { this.capitalize(name) } </h2>
        <button className="DetailsButton"> View Details </button>
      </div>
    );
  }
}

export default connect()(Door);
