import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { capitalize } from '../util';
import StarRatings from 'react-star-ratings';
import { handleAddToCart } from '../actions';
import '../styles/Home.scss';
import _ from 'lodash';

class DoorPage extends Component {
  state = {
    curDoor: {},
    color: '',
  }


  componentDidUpdate(prevProps) {
    // console.log('prevProps:', prevProps);
    // console.log('currentProps:', this.props);
    let previousDoors = prevProps.doors;
    let currentDoors = this.props.doors;

    if (_.isEqual(previousDoors, currentDoors)) { return; }

    // console.log('currentDoors:', currentDoors);
    this.setState({ curDoor: _.first(currentDoors), color: _.first(_.first(currentDoors).colors) })
  }

  toggleColor = (e) => {
    const selectedColor = e.target.id;
    this.setState({ color: selectedColor }); 
  }

  renderColorOptions = (colors, name, curColor) => {
    return (
      colors.map((color) => (
        <div className="ColorFilter" key={color}>
          <img className="ColorFilterImage" src={`../images/${color.split(' ').join('-')}.jpg`} alt={color} id={color} onClick={this.toggleColor}/>
          { curColor === color ? <hr className="SelectedColor"/> : null }
        </div>
      ))
    )
  }

  addToCart = (id, color) => {
    // console.log(`id: ${id}, color: ${color}`);
    this.props.dispatch(handleAddToCart(id, color));
  }

  render() {
    const { color } = this.state;
    const id = this.props.location.pathname.slice(6);

    const { doors } = this.props;
    const curDoor = Object.values(doors).filter((door) => door.id === parseInt(id))[0];

    let initColor = curDoor ? curDoor.colors[0] : null;

    let curColor = color ? color : initColor;

    return (

      <div className="ContentContainer">

        <div className="FeaturedDetails"> 
          <h1> { curDoor ? '$' + curDoor.price : null } </h1>
          <h2> { curDoor ? curDoor.size + ' ' + capitalize(curColor) + ' ' + capitalize(curDoor.name) : null } </h2>
          <h3> { curDoor ? '• ' + curDoor.description : null} </h3>
          
          <div className="RatingContainer"> 
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
          <button onClick={() => { this.addToCart(curDoor.id, color) }} > Buy Now </button>
        </div>

        <div className="FeaturedContainer"> 
          <div className="FeaturedImageContainer">
            <img className="FeaturedImage" src={ curDoor ? "../images/" + curColor.split(' ').join('-') + '-' + curDoor.name + ".jpg" : null } alt="DOOR"/>
          </div>

          <div className="ColorOptionContainer">
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
