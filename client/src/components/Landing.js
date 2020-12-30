import React from "react";
import colors from '../utils/colors'
import Header from "./Header";

const Landing = () => {
  return (
    <div>
    <Header />
    <div className="section no-pad-bot" id="index-banner">
    <div className="container">
      <br/><br/>
      <h1 className={`header center ${colors.primary}-text`}>Crowdmail</h1>
      <div className="row center">
        <h5 className="header col s12 light">An email-based data annotation SAS provider</h5>
      </div>
      <div className="row center">
        <a href="/auth/google" id="download-button" className={`btn-large waves-effect waves-light ${colors.primary}`}>Get Started</a>
      </div>
      <br/><br/>
    </div>
  </div>
  </div>
  
  );
};

export default Landing;
