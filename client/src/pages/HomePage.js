import React, { Component } from 'react';
import '../styles/Home.scss';
import { connect } from 'react-redux'; 
import StarRatings from 'react-star-ratings';
import { capitalize } from '../util';

class HomePage extends Component {
  state = {
    color: 'clear',
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

        <div className="ColorFilter" key={color}>
          <img className="ColorFilterImage" src={`../images/${color.split(' ').join('-')}.jpg`} alt={color} id={color} onClick={this.toggleColor}/>
          { this.state.color === color ? <hr className="SelectedColor"/> : null }
        </div>

      ))
    )
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
            <h2> { ftDoor ? ftDoor.size + ' ' + capitalize(ftDoor.name) + ' ' + capitalize(color) + ' Stain' : null } </h2>
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
            <img className="FeaturedImage" src={ ftDoor ? "./images/" + color.split(' ').join('-') + "-stain-" + ftDoor.name + ".jpg" : null  } alt="DOOR"/>
          </div>


         <div className="ColorOptionContainer">
          { ftDoor ? this.renderColorOptions(ftDoor.colors) : null }


          {/*
            <div className="ColorFilter">
              <img className="ColorFilterImage" src="./images/clear.jpg" alt="clear" id="clear" onClick={this.toggleColor}/>
              { color === 'clear' ? <hr className="SelectedColor"/> : null }
            </div>
            <div className="ColorFilter">
              <img className="ColorFilterImage" src="./images/provincial.jpg" alt="provincial" id="provincial" onClick={this.toggleColor}/> 
              { color === 'provincial' ? <hr className="Selected"/> : null }
            </div>
            <div className="ColorFilter">
              <img className="ColorFilterImage" src="./images/red-chestnut.jpg" alt="red chestnut" id="red-chestnut" onClick={this.toggleColor}/>
              { color === 'red-chestnut' ? <hr className="Selected"/> : null }
            </div>
        */}

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
