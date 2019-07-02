import React, { Component } from 'react';
import '../styles/Cart.scss';
import { connect } from 'react-redux'; 
import { capitalize } from '../util';

class CartItem extends Component {  

  render() {
    const { quantity, name, price, objId } = this.props;
    let doorName = capitalize(objId.split('-').slice(1).join(' '));
    let doorImg = objId.split('-').slice(2).join(' ');


    return (
      <div className="cart-item-container">
        <div className="cart-image-container">
          <img className="featured-image" src={ "../images/" + doorImg.split(' ').join('-') + '-' + name + ".jpg" } alt="DOOR"/>
        </div>
        <div className="cart-details-container">
          <h3> { doorName ? doorName : null } { name ? capitalize(name) : null } </h3>
          <h3> Quantity: { quantity } </h3>
          <h2> ${ price } </h2>
        </div>
      </div>
    );
  }
}

export default connect()(CartItem);
