import React, { Component } from 'react';
import '../styles/ToolBar.scss';
import '../styles/Cart.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Cart from './Cart';
import Search from './Search';

class ToolBar extends Component {

  state = {
    cartVisibility: false,
    searchVisibility: false,
  }

  componentDidMount = () => {
     window.addEventListener("mousedown", this.toggleHide);
  }

  toggleHide = () => {
    this.setState({ cartVisibility: false });
  }

  handleClickCart = () => {
    this.setState({ cartVisibility: true });
  }

  handleClickSearch = () => {
    this.setState({ searchVisibility: !this.state.searchVisibility });
  }

  scroll = (e) => {
    window.scrollTo(0, 0);
  }

  render() {
    const { cart } = this.props;
    const { cartVisibility, searchVisibility } = this.state;
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
          <ion-icon name="search" className="search-icon" id="search" onClick={this.handleClickSearch}></ion-icon> 
          { searchVisibility ? <Search/> : null }
          <ion-icon name="person" className="nav-item" id="account" onClick={this.handleClickAccount}></ion-icon>
          <ion-icon name="cart" className="nav-item" id="cart" onClick={this.handleClickCart}></ion-icon>
        </div>
        { Object.values(cart).length > 0 ? <div className="cart-has-items"/> : null }
        { cartVisibility ? <Cart/> : null }
      </div>
    );
  }
}

const mapStateToProps = ({ doors, cart }) => {
  return { doors: doors, cart: cart };
}

export default connect(mapStateToProps)(ToolBar);
