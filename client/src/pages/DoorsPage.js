import React, { Component } from 'react';
import '../styles/Doors.scss';
import { connect } from 'react-redux'; 
import Door from '../components/Door';
import { hasMatch } from '../util';

class DoorsPage extends Component {
  state = {
    price: 0,
    priceMin: 0,
    priceMax: 1000,
    color: {},
    priceFilter: false,
    colorFilter: false,
  }

  toggleCheckbox = (e) => {
    console.log('clicked', !document.getElementById("priceCheckbox").checked)

    switch (e.target.id) {
      case "priceCheckboxButton":
        document.getElementById("priceCheckbox").checked = !document.getElementById("priceCheckbox").checked;
        return this.setState({ priceFilter: !this.state.priceFilter });
      case "colorCheckboxButton":
        document.getElementById("colorCheckbox").checked = !document.getElementById("colorCheckbox").checked;
        return this.setState({ colorFilter: !this.state.colorFilter });
      default: 
        return;
    }
  }

  handleChangePrice = (e) => {
    this.setState({ price: e.target.value });
    this.setState({ priceFilter: true });
    switch (e.target.value) {
      case "0": 
        document.getElementById("priceCheckbox").checked = true;
        this.setState({ priceMin: 0 });
        this.setState({ priceMax: 1000 });
        return;
      case "1":
        document.getElementById("priceCheckbox").checked = true;
        this.setState({ priceMin: 1001 }); 
        this.setState({ priceMax: 1500 }); 
        return;
      case "2":
        document.getElementById("priceCheckbox").checked = true;
        this.setState({ priceMin: 1501 }); 
        this.setState({ priceMax: 2000 }); 
        return;
      case "3":
        document.getElementById("priceCheckbox").checked = true;
        this.setState({ priceMin: 2001 }); 
        this.setState({ priceMax: 2500 }); 
        return;
      case "4":
        document.getElementById("priceCheckbox").checked = true;
        this.setState({ priceMin: 2501 }); 
        this.setState({ priceMax: 3000 }); 
        return;
      case "5": 
        document.getElementById("priceCheckbox").checked = true;
        this.setState({ priceMin: 3001 }); 
        this.setState({ priceMax: Infinity }); 
        return;
      default: 
        document.getElementById("priceCheckbox").checked = true;
        this.setState({ priceMin: 0 }); 
        this.setState({ priceMax: 1000 }); 
        return;
    }
  }

  toggleColor = (e) => {
    const { color } = this.state;
    const selectedColor = e.target.id;
    this.setState({ colorFilter: true });
    document.getElementById("colorCheckbox").checked = true;
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
    const { priceMin, priceMax, color, priceFilter, colorFilter } = this.state;
    let filteredArray = Object.values(doors);

    if (priceFilter) {
      filteredArray = filteredArray.filter((door) => (
        door.price > priceMin && door.price < priceMax
      ))
    }
    
    if (colorFilter) {
      filteredArray = filteredArray.filter((door) => (
        hasMatch(color, door.colors) === true
      ))
    }

    return (
      filteredArray.map((door) => (
        <Door key={door.name} price={ door.price } name={ door.name } size={ door.size } img={ door.img } />
      ))
    )
  }

  render() {
    const { color, price, priceMin, priceMax } = this.state;

    return (
      <div className="DoorsPageContainer">
        <div className="FilterContainer">
          
          <div className="LabelContainer">
            <input type="checkbox" id="priceCheckbox"/>
            <span className="checkmark"></span>
            <label className="checkLabel" id="priceCheckboxButton" onClick={this.toggleCheckbox}></label>
            <h2> Price </h2>
          </div>
          
          <input type="range" className="custom-range" id="customRange1" value={price} min="0" max="5" step="1" onChange={this.handleChangePrice}/>
          <label> { priceMax === Infinity ? '$'+priceMin+'+' : '$'+priceMin+'-'+priceMax } </label>

          <div className="LabelContainer">
            <input type="checkbox" id="colorCheckbox"/>
            <span className="checkmark"></span>
            <label className="checkLabel" id="colorCheckboxButton" onClick={this.toggleCheckbox}></label>
            <h2> Color </h2>
          </div>

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
