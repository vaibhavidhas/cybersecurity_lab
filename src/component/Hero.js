import React from "react";

import "../styling/Hero.css";

import IntroImg from "../assets/BackgroundImage.png";

const Hero = () => {
  return (
    <div className="hero" id="scrollHome">
      <div className="heroMask">
        <img className="heroBkgImg" src={IntroImg} alt="cybersecurity images" />
      </div>
      
      <div className="heroContent">
        <h2>Let's Dive into World of </h2>

        <h1>CYBERSECURITY</h1>

        <p>Team915 provide's</p>
      </div>
    </div>
  );
};

export default Hero;
