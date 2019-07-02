import React, { Component } from 'react';
import '../styles/Home.scss';
import { connect } from 'react-redux'; 
import StarRatings from 'react-star-ratings';
import { capitalize } from '../util';
import { handleAddToCart } from '../actions';

class HomePage extends Component {
  state = {
    color: 'light brown',
  }

  toggleColor = (e) => {
    const { color } = this.state;
    const selectedColor = e.target.id;
    this.setState({ colorFilter: true });
    if (!color[selectedColor]) {
      this.setState({ color: selectedColor });
    }
    else this.setState({ color: selectedColor }); 
  }

  renderColorOptions = (colors) => {
    return (
      colors.map((color) => (

        <div className="color-filter" key={color}>
          <img className="color-filter-image" src={`../images/${color.split(' ').join('-')}.jpg`} alt={color} id={color} onClick={this.toggleColor}/>
          { this.state.color === color ? <hr className="selected-color"/> : null }
        </div>

      ))
    )
  }

  addToCart = (curDoor, color) => {
    this.props.dispatch(handleAddToCart(curDoor, color));
  }

  render() {
    const { doors, featured } = this.props;
    const { color } = this.state;
    const ftDoor = doors[featured[0]];

    let initColor = ftDoor ? ftDoor.colors[0] : null;
    let curColor = color ? color : initColor;

    return (
      <div className="content-container">

        <div className="banner">
          <div className="banner-text-container">
            <h1> Hey, are you tired of real doors cluttering up your house, </h1>
            <h2> where you open 'em up and they actually go somewhere? </h2>
          </div>

          <div className="featured-details"> 
            <h1> { ftDoor ? '$' + ftDoor.price : null } </h1>
            <h2> { ftDoor ? ftDoor.size + ' '  + capitalize(color) + ' ' + capitalize(ftDoor.name) : null } </h2>
            <h3> { ftDoor ? '• ' + ftDoor.description : null} </h3>
            <div className="rating-container"> 
              <StarRatings
                rating={ ftDoor ? ftDoor.rating : 0 }
                starRatedColor="orange"
                numberOfStars={5}
                name='rating'
                starDimension="20px"
                starSpacing="2px"
              />
              <h4> 
                { ftDoor ? '(' + ftDoor.numRatings + ')' : null }
              </h4>
            </div>
            <button onClick={() => { this.addToCart(ftDoor, curColor) }} > Buy Now </button>
          </div>
        </div>

        <div className="featured-container"> 
          <div className="featured-image-container">
            <img className="featured-image" src={ ftDoor ? "./images/" + color.split(' ').join('-') + '-' + ftDoor.name + ".jpg" : null  } alt="DOOR"/>
          </div>

          <div className="color-option-container">
            { ftDoor ? this.renderColorOptions(ftDoor.colors) : null }
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ doors, featured }) {
  return { doors: doors, featured: featured };
}

export default connect(mapStateToProps)(HomePage);
