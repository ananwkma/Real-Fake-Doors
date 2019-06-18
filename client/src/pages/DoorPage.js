import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { capitalize } from '../util';
import StarRatings from 'react-star-ratings';
import '../styles/Home.scss';

class DoorPage extends Component {
  state = {
    color: 'clear',
  }

  toggleColor = (e) => {
    const { color } = this.state;
    const selectedColor = e.target.id;
    this.setState({ color: selectedColor }); 
  }

  renderColorOptions = (colors) => {
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

    // console.log(this.state.color);
    // console.log(curDoor ? "../images/" + color.split(' ').join('-') + "-stain-" + curDoor.name : null)

    return (

      <div className="ContentContainer">

        <div className="FeaturedDetails"> 
          <h1> { curDoor ? '$' + curDoor.price : null } </h1>
          <h2> { curDoor ? curDoor.size + ' ' + capitalize(curDoor.name) + ' ' + capitalize(color) + ' Stain' : null } </h2>
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
            <img className="FeaturedImage" src={ curDoor ? "../images/" + color.split(' ').join('-') + "-stain-" + curDoor.name + ".jpg" : null } alt="DOOR"/>
          </div>

          <div className="ColorOptionContainer">
            { curDoor ? this.renderColorOptions(curDoor.colors) : null }
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
