import React from 'react'
import { Row, Col, UncontrolledCollapse, ButtonToggle , CardBody, Card } from "reactstrap"
import Notes from '../components/notes'

const Right = () => {

    if (window.location.href === "http://localhost:3000/meetings" || window.location.href === "https://test.fiservseminars.com/meetings" || window.location.href === "https://master.dorsxmbom1bqx.amplifyapp.com/meetings") {
        return (
            <section className="right meetings">
                <Notes />
            </section>
        )
    } else {
        return (
            <section className="right">
                <div>
                    <div className="meetingContent">
                        <h1>
                            Agenda
                        </h1>
                        <div className="toggle-buttons">
                            <ButtonToggle  id="toggler">Day 1</ButtonToggle>{' '}
                            <ButtonToggle  id="toggler2">Day 2</ButtonToggle>{' '}
                            <ButtonToggle  id="toggler3">Day 3</ButtonToggle>{' '}
                        </div>
                        
                    </div>
                    <UncontrolledCollapse toggler="#toggler">
                        <Card>
                            <CardBody>
                                <div className="meetings">
                                    <Row className="day1">
                                        <Col md={5} className="meetingContent">
                                            <h3 className="meetingTitle">
                                                Deposit Parameters Review
                                            </h3>
                                            <p>
                                                @ 8:15 - 9:00 a.m. 
                                            </p>
                                        </Col>
                                        <Col md={5} className="meetingContent">
                                            <h3 className="meetingTitle">
                                                User Defined Options: Tips and Tricks
                                            </h3>
                                            <p>
                                                @ 9:15 - 10:00 a.m.
                                            </p>
                                        </Col>
                                        <Col md={5} className="meetingContent">
                                            <h3 className="meetingTitle">
                                                Online Posting Features
                                            </h3>
                                            <p>
                                                @ 10:15 - 11:00 a.m.
                                            </p>
                                        </Col>
                                        <Col md={5} className="meetingContent">
                                            <h3 className="meetingTitle">
                                            Precision 2020.1 and 2020.2 Deposits & Other
                                            </h3>
                                            <p>
                                                @ 11:15 - 12:00 p.m.
                                            </p>
                                        </Col>
                                    </Row>
                                </div> 
                            </CardBody>
                        </Card>
                    </UncontrolledCollapse>
                    <UncontrolledCollapse toggler="#toggler2">
                        <Card>
                            <CardBody>
                                <div className="meetings">
                                    <Row className="day2">
                                        <Col md={5} className="meetingContent">
                                            <h3 className="meetingTitle">
                                                Loan Parameters
                                            </h3>
                                            <p>
                                                @ 8:15 - 9:00 a.m. 
                                            </p>
                                        </Col>
                                        <Col md={5} className="meetingContent">
                                            <h3 className="meetingTitle">
                                                Loan Credit
                                            </h3>
                                            <p>
                                                @ 9:15 - 10:00 a.m.
                                            </p>
                                        </Col>
                                        <Col md={5} className="meetingContent">
                                            <h3 className="meetingTitle">
                                                Loans: Did You Know
                                            </h3>
                                            <p>
                                                @ 10:15 - 11:00 a.m.
                                            </p>
                                        </Col>
                                        <Col md={5} className="meetingContent">
                                            <h3 className="meetingTitle">
                                                Precision 2020.2 and 2020.3 Loans
                                            </h3>
                                            <p>
                                                @ 11:15 - 12:00 p.m.
                                            </p>
                                        </Col>
                                    </Row>
                                </div> 
                            </CardBody>
                        </Card>
                    </UncontrolledCollapse>
                    <UncontrolledCollapse toggler="#toggler3">
                        <Card>
                            <CardBody>
                                <div className="meetings">
                                    <Row className="day3">
                                        <Col md={5} className="meetingContent">
                                            <h3 className="meetingTitle">
                                                Employ I-32 Forms Design to Set Your Institution Apart
                                            </h3>
                                            <p>
                                                @ 8:15 - 9:00 a.m. 
                                            </p>
                                        </Col>
                                        <Col md={5} className="meetingContent">
                                            <h3 className="meetingTitle">
                                                Increase CDD/BSA Compliance With BPM
                                            </h3>
                                            <p>
                                                @ 9:15 - 10:00 a.m.
                                            </p>
                                        </Col>
                                        <Col md={5} className="meetingContent">
                                            <h3 className="meetingTitle">
                                                Precision Roadmap
                                            </h3>
                                            <p>
                                                @ 10:15 - 11:00 a.m.
                                            </p>
                                        </Col>
                                        <Col md={5} className="meetingContent">
                                            <h3 className="meetingTitle">
                                                Networking/Happy Hour
                                            </h3>
                                            <p>
                                                @ 11:15 - 12:00 p.m.
                                            </p>
                                        </Col>
                                    </Row>
                                </div> 
                            </CardBody>
                        </Card>
                    </UncontrolledCollapse>
                </div>
            </section>
        )
    };     
}

export default Right