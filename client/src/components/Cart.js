import React, { Component } from 'react';
import '../styles/ToolBar.scss';
import '../styles/Cart.scss';
import { connect } from 'react-redux';
import CartItem from './CartItem';

class Cart extends Component {

  render() {
    const { cart } = this.props;
    let total = 0;

    Object.values(cart).map(door => (
      total += (door.quantity * door.price)
    ))

    return (
      <div className="cart">
        <div className="item-container"> 
          { Object.entries(cart).map((door) => (
            <div key={door[0]}>
              <CartItem objId={door[0]} quantity={door[1].quantity} name={door[1].name} price={door[1].price}/>
              <hr/>
            </div>
          )) }
        </div>
        <div className="total-container">
          <div className="total-sub-container">
            <h3> Subtotal </h3> 
            <h2> { '$' + total.toFixed(2) } </h2>
          </div>
          <div className="total-sub-container">
            <h3> Tax (8.75%) </h3> 
            <h2> { '$' + (total * 0.0875).toFixed(2) } </h2>
          </div>
          <div className="total-sub-container">
            <h2> Total </h2> 
            <h1> { '$' + (total + (total * 0.0875)).toFixed(2) } </h1>
          </div>
        </div>

        <button className="checkout-button"> Checkout </button> 
      </div>
    );
  }
}

const mapStateToProps = ({ doors, cart }) => {
  return { doors: doors, cart: cart };
}

export default connect(mapStateToProps)(Cart);
