import React, { Component } from 'react';
import Home from './Home';
import ToolBar from './ToolBar';
import NavBar from './NavBar';
import Footer from './Footer';
import { throttle } from 'lodash';
import { handleReceiveData } from '../actions';
import { connect } from 'react-redux';

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
      <div className="col-sm">
        <ToolBar />
        <NavBar />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default connect()(App);
