import React, { Component } from "react";

import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidenav from "../components/SideNav";
import Left from "../components/Left";
import Right from "../components/Right";

import contentData from "../utils/contentData";

class Content extends Component {
  render() {
    return (
      <div className="next-steps my-5 content-wrapper">
        <Sidenav />
        <div className="main-content">
          <Left />
          <Right />
        </div>
        
      </div>
    );
  }
}

export default Content;
