import React, { Component } from 'react';
import '../styles/ToolBar.scss';
import '../styles/Cart.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CartItem from './CartItem';

class ToolBar extends Component {

  state = {
    cartVisibility: false,
  }

  componentDidMount = () => {
     window.addEventListener("mousedown", this.toggleHide);
  }

  toggleHide = () => {
    this.setState({ cartVisibility: false })
  }

  handleClickCart = () => {
    this.setState({ cartVisibility: true });
  }

  scroll = (e) => {
    window.scrollTo(0, 0);
  }

  render() {
    const { cart } = this.props;
    const { cartVisibility } = this.state;
    let total = 0;

    Object.values(cart).map(door => (
      total += (door.quantity * door.price)
    ))

    return (
      <div className="container">
        <div className="nav-left"> 
          <Link to='/' className="tool-link">
            <h2 className="home-button" onClick={this.scroll}>Real Fake Doors</h2>
          </Link>
        </div>

        <div className="nav-right"> 
          <ion-icon name="search" className="nav-item" id="search" onClick={this.handleClickSearch}></ion-icon> 
          <ion-icon name="person" className="nav-item" id="account" onClick={this.handleClickAccount}></ion-icon>
          <ion-icon name="cart" className="nav-item" id="cart" onClick={this.handleClickCart}></ion-icon>
        </div>
        { Object.values(cart).length > 0 ? <div className="cart-has-items"/> : null }
        { cartVisibility ? 
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
          : null
        }
        
      </div>
    );
  }
}

const mapStateToProps = ({ doors, cart }) => {
  return { doors: doors, cart: cart };
}

export default connect(mapStateToProps)(ToolBar);
