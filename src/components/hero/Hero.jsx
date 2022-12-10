import React from "react";
import HeroText from "./HeroText";
import heroBgImg from "../../assets/images/designer-main.png";

const Hero = () => {
  return (
    <div className="hero-container">
      <div>
        <img src={heroBgImg} alt="Hero img" className="hero-bg-img" />
      </div>
      <HeroText />
    </div>
  );
};

export default Hero;
