import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/Search.scss';
import { Link, Route } from 'react-router-dom';
import { capitalize } from '../util';


class Search extends Component {

  state = {
    autofillVisibility: false,
    searchText: '',
  }

  autofill = (e) => {
    const text = e.target.value;
    this.setState({ searchText: text });
    this.setState({ autofillVisibility: text ? true : false });
  }
  
  renderAutofillResults = () => {
    const { searchText } = this.state;
    const { doors } = this.props;
    let doorArr = Object.values(doors);

    doorArr = doorArr.filter(door => (
      door.name.indexOf(searchText) >= 0
    ))

    // console.log('doorArr', doorArr)

    return (
      doorArr.map((door, idx) => (
        <Link className="autofill-link" key={door.name} to={`/door/${door.id}`}> 
          <div className="autofill-options"  style={{top: (29*idx+"px")}}> 
            { capitalize(door.name) } 
          </div> 
          <Route path={`/door/${door.id}`}/>
        </Link>
      ))
    )

  }

  render() {
    const { autofillVisibility } = this.state;

    return (
      <form autoComplete="off"> 
        <div className="autofill-container">
          
          <input 
            id="search-bar" 
            type="text" 
            className="search-bar" 
            placeholder="Search..." 
            onChange={(e) => this.autofill(e)}
          />
          { autofillVisibility ? this.renderAutofillResults() : null }

        </div>
      </form>
    );
  }
}

const mapStateToProps = ({ doors, cart }) => {
  // console.log('test', doors)
  return { doors: doors, cart: cart };
}

export default connect(mapStateToProps)(Search);
