import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header-logos">
          <img src="https://s3.amazonaws.com/kevin-urraca/logolink_3.jpg" className="header-img-two" alt="" />
          <img src="https://s3.amazonaws.com/kevin-urraca/logolink_2.jpg" className="header-img-one" alt="" />
        </div>
        <div className="body">
          <div className="images-one">
            <img src="https://s3.amazonaws.com/kevin-urraca/DSC_1746.JPG" className="pic left" alt="" />
            <div className="logoWrapper left">
              <img src="https://s3.amazonaws.com/kevin-urraca/logolink.jpg" className="logo left" alt="" />
            </div>
          </div>
          <div className="images-two">
            <img src="https://s3.amazonaws.com/kevin-urraca/DSC_0259.JPG" className="pic right" alt="" />
            <div className="logoWrapper right">
              <img src="https://s3.amazonaws.com/kevin-urraca/logolink_1.jpg" className="logo right" alt="" />
            </div>
          </div>
        </div>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
