import React, { Component } from 'react';
import '../styles/Door.scss';
import { connect } from 'react-redux'; 
import { capitalize } from '../util';
import { Link, Route } from 'react-router-dom';

class Door extends Component {  

  render() {
    const { price, name, size, img, id } = this.props;

    return (
      <div className="DoorContainer">
        <img src={ "./images/" + img } alt={name}/>
        <h1> ${ price } </h1>
        <h2> { size } { capitalize(name) } </h2>
        <Link to={`/door/${id}`}>
          <button className="DetailsButton"> View Details </button>
        </Link>
        <Route path={`/door/${id}`}/>
      </div>
    );
  }
}

export default connect()(Door);
