import React, { Component } from "react";
import logo from "../assets/header.png";

class Contact extends Component {
  render() {
    return (
      <div className="next-steps my-5 seminar-container">
          <img className="mb-3 app-logo" src={logo} alt="React logo" width="962px" />
          <h2>Contact Us</h2>
          <p class="">
            If you have any questions regarding the event, please contact:<br/>
            Email: <a href="mailto:educationseminars@fiserv.com">educationseminars@fiserv.com</a>
          </p>
      </div>
    );
  }
}

export default Contact;
