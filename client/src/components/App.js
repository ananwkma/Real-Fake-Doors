import React, { Component } from 'react';
import HomePage from '../pages/HomePage';
import DoorsPage from '../pages/DoorsPage';
import MissionPage from '../pages/MissionPage';
import ContactUsPage from '../pages/ContactUsPage';
import CareersPage from '../pages/CareersPage';
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage';
import TermsConditionsPage from '../pages/TermsConditionsPage';
import ScrollToTop from './ScrollToTop';
import ToolBar from './ToolBar';
import NavBar from './NavBar';
import Footer from './Footer';
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

  onResize = throttle(this.handleOnResize, 5000, { trailing: true });
  
  render() {
    return (
      <Router> 
        <ScrollToTop>
          <div className="parent">
            <ToolBar />
            <NavBar />
            <Route exact path="/" component={ HomePage }/>
            <Route path="/doors" component={ DoorsPage }/>
            <Route path="/mission" component={ MissionPage }/>
            <Route path="/contact" component={ ContactUsPage }/>
            <Route path="/careers" component={ CareersPage }/>
            <Route path="/privacy" component={ PrivacyPolicyPage }/>
            <Route path="/terms" component={ TermsConditionsPage }/>
            <Footer />
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default connect()(App);
