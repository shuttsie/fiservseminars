import React from "react";
<<<<<<< HEAD
import HeroInfo from "./HeroInfo";

import logo from "../assets/header.png";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="" />
    <h1 className="mb-4">Guiding Growth, Delivering Excellence. <span style={{color: "#000",fontWeight: "normal"}}>That's what the seminars are all about!</span></h1>
    <HeroInfo />
=======

import logo from "../assets/logo.svg";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">React.js Sample Project</h1>

    <p className="lead">
      This is a sample application that demonstrates an authentication flow for
      an SPA, using <a href="https://reactjs.org">React.js</a>
    </p>
>>>>>>> test
  </div>
);

export default Hero;
