import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { capitalize } from '../util';
import StarRatings from 'react-star-ratings';
import '../styles/Home.scss';

class DoorPage extends Component {
  state = {
    color: 'light brown',
  }

  toggleColor = (e) => {
    const selectedColor = e.target.id;
    this.setState({ color: selectedColor }); 
  }

  renderColorOptions = (colors, name) => {

    return (
      colors.map((color) => (

        <div className="ColorFilter" key={color}>
          <img className="ColorFilterImage" src={`../images/${color.split(' ').join('-')}.jpg`} alt={color} id={color} onClick={this.toggleColor}/>
          { this.state.color === color ? <hr className="SelectedColor"/> : null }
        </div>

      ))
    )
  }

  render() {
    const { color } = this.state;
    const id = this.props.location.pathname.slice(6);

    const { doors } = this.props;
    const curDoor = Object.values(doors).filter((door) => door.id === parseInt(id))[0];

    return (

      <div className="ContentContainer">

        <div className="FeaturedDetails"> 
          <h1> { curDoor ? '$' + curDoor.price : null } </h1>
          <h2> { curDoor ? curDoor.size + ' ' + capitalize(color) + ' ' + capitalize(curDoor.name) : null } </h2>
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
          <button> Buy Now </button>
        </div>

        <div className="FeaturedContainer"> 
          <div className="FeaturedImageContainer">
            <img className="FeaturedImage" src={ curDoor ? "../images/" + color.split(' ').join('-') + '-' + curDoor.name + ".jpg" : null } alt="DOOR"/>
          </div>

          <div className="ColorOptionContainer">
            { curDoor ? this.renderColorOptions(curDoor.colors, curDoor.name) : null }
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
