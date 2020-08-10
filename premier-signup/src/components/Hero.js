import React from "react";
import HeroInfo from "./HeroInfo";

import logo from "../assets/header.png";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="962px" />
    <h1 className="mb-4">Sharing Knowledge & Making Connections. <span style={{color: "#000",fontWeight: "normal"}}>That's what the seminars are all about!</span></h1>
    <h2><i>Guiding growth, delivering excellence.</i></h2>
    <HeroInfo />
  </div>
);

export default Hero;
