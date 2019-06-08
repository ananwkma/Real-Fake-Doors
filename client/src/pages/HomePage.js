import React, { Component } from 'react';
import '../styles/Home.scss';
import { connect } from 'react-redux'; 
import StarRatings from 'react-star-ratings';

class HomePage extends Component {
  state = {
    color: 'clear'
  }

  capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  render() {
    const { doors, featured } = this.props;
    const { color } = this.state;
    const ftDoor = doors[featured[0]];

    return (
      <div className="ContentContainer">

        <div className="Banner">
          <div className="BannerTextContainer">
            <h1> Hey, are you tired of real doors cluttering up your house, </h1>
            <h2> where you open 'em up and they actually go somewhere? </h2>
          </div>

          <div className="FeaturedDetails"> 
            <h1> { ftDoor ? '$' + ftDoor.price : null } </h1>
            <h2> { ftDoor ? ftDoor.size + ' ' + this.capitalize(ftDoor.name) + ' ' + this.capitalize(color) + ' Stain' : null } </h2>
            <h3> { ftDoor ? '• ' + ftDoor.description : null} </h3>
            <div className="RatingContainer"> 
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
            <button> Buy Now </button>
          </div>
        </div>

        <div className="FeaturedContainer"> 
          <div className="FeaturedImageContainer">
            <img className="FeaturedImage" src={ ftDoor ? ftDoor.img : null } alt="DOOR"/>
          </div>
          <div className="ColorOptionContainer">
            <div className="ColorOption">
              <img className="ColorOptionImage" src="clear-stain.jpg" alt="clear"/>
              <hr className="Selected"/>
            </div>
            <div className="ColorOption">
              <img className="ColorOptionImage" src="provincial-stain.jpg" alt="provincial"/>  
              {//<hr className="Selected"/>
              }
            </div>
            <div className="ColorOption">
              <img className="ColorOptionImage" src="red-chestnut-stain.jpg" alt="red chestnut"/>
              {//<hr className="Selected"/>
              }
            </div>
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
