import React, { Component } from 'react';
import '../styles/Door.scss';
import { connect } from 'react-redux'; 
import { capitalize } from '../util';

class Door extends Component {  

  render() {
    const { price, name, size, img } = this.props;

    return (
      <div className="DoorContainer">
        <img src={img} alt={name}/>
        <h1> ${ price } </h1>
        <h2> { size } { capitalize(name) } </h2>
        <button className="DetailsButton"> View Details </button>
      </div>
    );
  }
}

export default connect()(Door);
