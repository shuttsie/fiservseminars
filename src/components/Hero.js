import React from "react";
import HeroInfo from "./HeroInfo";

import logo from "../assets/header.png";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="" />
    <h1 className="mb-4">Guiding Growth, Delivering Excellence. <span style={{color: "#000",fontWeight: "normal"}}>That's what the seminars are all about!</span></h1>
    <HeroInfo />
  </div>
);

export default Hero;
