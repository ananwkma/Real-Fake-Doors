import React, { Component } from 'react';
import Home from './Home';
import ToolBar from './ToolBar';
import NavBar from './NavBar';
import Footer from './Footer';
import Doors from './Doors';
import Mission from './Mission';
import { throttle } from 'lodash';
import { handleReceiveData } from '../actions';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleReceiveData());
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  handleOnResize() {
    console.log('somehow optimize resize');
  }

  onResize = throttle(this.handleOnResize, 200, { trailing: true });
  
  render() {
    return (
      <Router> 
        <div className="col-sm">
          <ToolBar />
          <NavBar />
          <Route exact path="/" component={Home}/>
          <Route path="/doors" component={Doors}/>
          <Route path="/mission" component={Mission}/>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
