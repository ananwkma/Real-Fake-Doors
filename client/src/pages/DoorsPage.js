import React, { Component } from 'react';
import '../styles/Doors.scss';
import { connect } from 'react-redux'; 
import StarRatings from 'react-star-ratings';
import Door from '../components/Door';

class DoorsPage extends Component {
  state = {
    price: 0,
    priceMin: 0,
    priceMax: 1000,
    color: {},
  }

  handleChangePrice = (e) => {
    this.setState({ price: e.target.value });
    switch (e.target.value) {
      case "0": 
        this.setState({ priceMin: 0 });
        this.setState({ priceMax: 1000 });
        return;
      case "1":
        this.setState({ priceMin: 1001 }); 
        this.setState({ priceMax: 1500 }); 
        return;
      case "2":
        this.setState({ priceMin: 1501 }); 
        this.setState({ priceMax: 2000 }); 
        return;
      case "3":
        this.setState({ priceMin: 2001 }); 
        this.setState({ priceMax: 2500 }); 
        return;
      case "4":
        this.setState({ priceMin: 2501 }); 
        this.setState({ priceMax: 3000 }); 
        return;
      case "5": 
        this.setState({ priceMin: 3001 }); 
        this.setState({ priceMax: Infinity }); 
        return;
      default: 
        this.setState({ priceMin: 0 }); 
        this.setState({ priceMax: 1000 }); 
        return;
    }
  }

  toggleColor = (e) => {
    const { color } = this.state;
    const selectedColor = e.target.id;
    if (!color[selectedColor]) {
      this.setState({ color: { ...color, [selectedColor]: true }});
    }
    else this.setState({ color: { ...color, [selectedColor]: !color[selectedColor] }}); 
  }

  clearColors = () => {
    this.setState({ color : {} });
  }

  renderDoors = () => {
    const { doors } = this.props;
    const { priceMin, priceMax } = this.state;
    const filteredArray = Object.values(doors).filter((door) => (
      door.price > priceMin && door.price < priceMax
    ))
    return (
      filteredArray.map((door) => (
        <Door key={door.name} price={ door.price } name={ door.name } size={ door.size } img={ door.img } />
      ))
    )
  }

  render() {
    const { doors, featured } = this.props;
    const { color, price, priceMin, priceMax } = this.state;
    const ftDoor = doors[featured[0]];

    return (
      <div className="DoorsPageContainer">
        <div className="FilterContainer">
          <h2> Price </h2>
          <input type="range" className="custom-range" id="customRange1" value={price} min="0" max="5" step="1" onChange={this.handleChangePrice}/>
          <label> { priceMax === Infinity ? '$'+priceMin+'+' : '$'+priceMin+'-'+priceMax } </label>
          <h2> Color </h2>
          <div className="ColorRow">
            <div className="ColorFilterContainer">
              <div className="ColorFilter">
                <img className="ColorFilterImage" src="clear-stain.jpg" alt="clear" id="clear" onClick={this.toggleColor}/>
                { color['clear'] ? <hr className="SelectedColor"/> : null }
              </div>
              <div className="ColorFilter">
                <img className="ColorFilterImage" src="provincial-stain.jpg" alt="provincial" id="provincial" onClick={this.toggleColor}/> 
                { color['provincial'] ? <hr className="Selected"/> : null }
              </div>
              <div className="ColorFilter">
                <img className="ColorFilterImage" src="red-chestnut-stain.jpg" alt="red chestnut" id="red-chestnut" onClick={this.toggleColor}/>
                { color['red-chestnut'] ? <hr className="Selected"/> : null }
              </div>
              <div className="ColorFilter">
                <img className="ColorFilterImage" src="white-stain.jpg" alt="white" id="white" onClick={this.toggleColor}/>
                { color['white'] ? <hr className="Selected"/> : null }
              </div>
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
