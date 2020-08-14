import React, { Component } from "react";

import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-regular-svg-icons";

import Seminars from "../utils/seminars";

class Content extends Component {
  render() {
    return (
      <div className="next-steps my-5 seminar-container">
          <h2>Dates</h2>
          <p class="italic-important">
          Review the agenda, then click the "Register" button above to select your preferred date(s).
          </p>
          <p>
            For your convenience and to maximize the potential for your team to enhance their knowledge, we are offering each Simulive session twice, once from <b>8 a.m. - 12 p.m. Central Time</b> and a repeat session from <b>1 p.m. - 5 p.m. Central Time</b>.
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
          {/* <Row className="d-flex justify-content-between">
            {Seminars.map((col, i) => (
              <Col key={i} md={5} className="mb-4 col-location">
                <h6 className="mb-3">
                    {col.location}
                </h6>
              </Col>
            ))}
          </Row> */}
        </div>
      </div>
    );
  }
}

export default Content;