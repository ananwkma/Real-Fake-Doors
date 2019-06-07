import React, { Component } from 'react';
import '../styles/Doors.scss';
import { connect } from 'react-redux'; 
import StarRatings from 'react-star-ratings';
import Door from '../components/Door';

class DoorsPage extends Component {
  state = {
    price: 0,
    priceRange: "$0-$1000",
    color: {},
  }

  handleChangePrice = (e) => {
    this.setState({ price: e.target.value });
    switch (e.target.value) {
      case "0": 
        return this.setState({ priceRange: "$0-$1000" }); 
      case "1":
        return this.setState({ priceRange: "$1001-$1500" }); 
      case "2":
        return this.setState({ priceRange: "$1501-$2000" }); 
      case "3":
        return this.setState({ priceRange: "$2001-$2500" }); 
      case "4":
        return this.setState({ priceRange: "$2501-$3000" }); 
      case "5": 
        return this.setState({ priceRange: "$3001+" }); 
      default: 
        return this.setState({ priceRange: "$0-$1000" }); 
    }
  }

  toggleColor = (e) => {
    const { color } = this.state;
    const selectedColor = e.target.id;
    if (!color[selectedColor]) {
      this.setState({ color: { ...color, [selectedColor]: 1 }});
    }
    else this.setState({ color: { ...color, [selectedColor]: color[selectedColor]+1 }}); 
  }

  clearColors = () => {
    this.setState({ color : {} });
  }

  renderDoors = () => {
    const { doors } = this.props;
    return (
      Object.values(doors).map((door) => (
        <Door price={ door.price } name={ door.name } size={ door.size }/>
      ))
    )
  }

  render() {
    const { doors, featured } = this.props;
    const { color, price, priceRange } = this.state;
    const ftDoor = doors[featured[0]];

    return (
      <div className="DoorsPageContainer">
        <div className="FilterContainer">
          <h2> Price </h2>
          <input type="range" className="custom-range" id="customRange1" value={price} min="0" max="5" step="1" onChange={this.handleChangePrice}/>
          <label> { priceRange } </label>
          <h2> Color </h2>
          <div className="ColorFilterContainer">
            <div className="ColorFilter">
              <img className="ColorFilterImage" src="clear-stain.jpg" alt="clear" id="clear" onClick={this.toggleColor}/>
              { color['clear'] && color['clear'] % 2 === 1 ? <hr className="Selected"/> : null }
            </div>
            <div className="ColorFilter">
              <img className="ColorFilterImage" src="provincial-stain.jpg" alt="provincial" id="provincial" onClick={this.toggleColor}/> 
              { color['provincial'] && color['provincial'] % 2 === 1? <hr className="Selected"/> : null }
            </div>
            <div className="ColorFilter">
              <img className="ColorFilterImage" src="red-chestnut-stain.jpg" alt="red chestnut" id="red-chestnut" onClick={this.toggleColor}/>
              { color['red-chestnut'] && color['red-chestnut'] % 2 === 1? <hr className="Selected"/> : null }
            </div>
            <div className="ColorFilter">
              <img className="ColorFilterImage" src="white-stain.jpg" alt="white" id="white" onClick={this.toggleColor}/>
              { color['white'] && color['white'] % 2 === 1 ? <hr className="Selected"/> : null }
            </div>
          </div>
          <h4 className="ClearAllButton" onClick={this.clearColors}> Clear All </h4>
        </div>
        
        <hr/>

        <div className="DoorsContainer">
          { this.renderDoors() }
        </div>
      </div>
    );
  }
}

function mapStateToProps({ doors, featured }) {
  return { doors: doors, featured: featured };
}

export default connect(mapStateToProps)(DoorsPage);
