import React, { Component } from "react";

import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-regular-svg-icons";

import Seminars from "../utils/seminars";
import logo from "../assets/header.png";

class DatesLocations extends Component {
  render() {
    return (
      <div className="next-steps my-5 seminar-container">
          <img className="mb-3 app-logo" src={logo} alt="React logo" width="962px" />
          <h2>Dates & Locations</h2>
          <p class="italic-important">
          Review the agenda, then <a href="http://www.cvent.com/d/lhq4sj/2K">Register</a> to select your preferred date(s).
          </p>
          <p>
            For you convenience - and to maximize the potential for your team to enhance their knowledge - we are offering each virtual session twice, once from <b>8 a.m. - 12 p.m. Central Time</b> and a repeat session from <b>1 p.m. - 5 p.m. Central Time</b>.
          </p>
        <div className="seminar-rows">
          <Row className="d-flex justify-content-between">
            {Seminars.map((col, i) => (
              <Col key={i} md={5} className="mb-4 col-date">
                <h6 className="mb-3">
                <FontAwesomeIcon icon={Icons.faCalendarAlt} size="2px" className="mr-2"/>
                    {col.date}
                </h6>
              </Col>
            ))}
          </Row>
          <Row className="d-flex justify-content-between">
            {Seminars.map((col, i) => (
              <Col key={i} md={5} className="mb-4 col-location">
                <h6 className="mb-3">
                    {col.location}
                </h6>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    );
  }
}

export default DatesLocations;