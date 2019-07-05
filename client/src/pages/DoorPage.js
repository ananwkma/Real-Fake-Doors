import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { capitalize } from '../util';
import StarRatings from 'react-star-ratings';
import { handleAddToCart } from '../actions';
import '../styles/Home.scss';

class DoorPage extends Component {
  state = {
    curDoor: {},
    color: '',
  }

  toggleColor = (e) => {
    const selectedColor = e.target.id;
    this.setState({ color: selectedColor }); 
  }

  renderColorOptions = (colors, name, curColor) => {
    return (
      colors.map((color) => (
        <div className="color-filter" key={color}>
          <img className="color-filter-image" src={`../images/${color.split(' ').join('-')}.jpg`} alt={color} id={color} onClick={this.toggleColor}/>
          { curColor === color ? <hr className="selected-color"/> : null }
        </div>
      ))
    )
  }

  addToCart = (curDoor, color) => {
    this.props.dispatch(handleAddToCart(curDoor, color));
  }

  render() {
    const { color } = this.state;
    const id = this.props.location.pathname.slice(6);

    const { doors } = this.props;
    const curDoor = Object.values(doors).filter((door) => door.id === parseInt(id))[0];

    let initColor = curDoor ? curDoor.colors[0] : null;

    let curColor = color ? color : initColor;
    if (curDoor && curDoor.colors.indexOf(color) < 0) curColor = initColor; 

    return (

      <div className="content-container">

        <div className="featured-details"> 
          <h1> { curDoor ? '$' + curDoor.price : null } </h1>
          <h2> { curDoor ? curDoor.size + ' ' + capitalize(curColor) + ' ' + capitalize(curDoor.name) : null } </h2>
          <h3> { curDoor ? '• ' + curDoor.description : null} </h3>
          
          <div className="rating-container"> 
            <StarRatings
              rating={ curDoor ? curDoor.rating : 0 }
              starRatedColor="orange"
              numberOfStars={5}
              name='rating'
              starDimension="20px"
              starSpacing="2px"
            />
            <h4> 
              { curDoor ? '(' + curDoor.numRatings + ')' : null }
            </h4>
          </div>
          <button onClick={() => { this.addToCart(curDoor, curColor) }} > Buy Now </button>
        </div>

        <div className="featured-container"> 
          <div className="featured-image-container">
            <img className="featured-image" src={ curDoor ? "../images/" + curColor.split(' ').join('-') + '-' + curDoor.name + ".jpg" : null } alt="DOOR"/>
          </div>

          <div className="color-option-container">
            { curDoor ? this.renderColorOptions(curDoor.colors, curDoor.name, curColor) : null }
          </div>

        </div>

      </div>
    );
  }
}

function mapStateToProps({ doors }) {
  return { doors: doors };
}

export default connect(mapStateToProps)(DoorPage);
