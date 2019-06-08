import React, { Component } from 'react';
import '../styles/About.scss';

class About extends Component {
  render() {
    return (
      <div className="AboutContainer">
        <div className="ProfilePicContainer">
          <img className="ProfilePic" src="circlelinkedincropbnw.png" alt="profilepic"/>
        </div>
        
        <hr/>

        <h2 className="Blurb">
          I am a full-stack developer looking for opportunities. 
          I most recently worked in QA at Apple, fixing and reporting graphical errors. 
          Now I am using both my visual and technical ability to create beautiful responsive 
          web apps with React. On my free time I enjoy illustrating and playing video games.
        </h2>

        <hr/>
      </div>
    );
  }
}

export default About;
