import React from "react";
import { Row, Col } from "reactstrap";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Seminars from "../utils/seminars";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightBold,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <h1>Frequently Asked Questions</h1>
    <h2 className="section-header">Precision</h2>
    <br/>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <FontAwesomeIcon icon={Icons.faInfoCircle} size="2px" className="mr-2"/>  <Typography className={classes.heading}>What is the Education Seminar?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The Education Seminar is a three-day, virtual client conference that provides the ideal setting to gain new perspectives and connect with peers and Fiserv experts.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
        <FontAwesomeIcon icon={Icons.faInfoCircle} size="2px" className="mr-2"/>  <Typography className={classes.heading}>Why should I attend the Education Seminar?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We are better together! Join online as peers and Fiserv experts share insightful presentations and discussions that will increase your organizational efficiency. Learn more about the software you use every day while building a wide network of business relationships.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
        <FontAwesomeIcon icon={Icons.faInfoCircle} size="2px" className="mr-2"/>  <Typography className={classes.heading}>When and where are the Education Seminars?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            For your convenience and to maximize the potential for your team to enhance their knowledge, we are offering each Simulive session twice, once from <b>8 a.m. - 12 p.m. Central Time</b> and a repeat session from <b>1 p.m. - 5 p.m. Central Time</b>.
            <div className="seminar-rows faq">
                <Row className="d-flex justify-content-between col">
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
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
        <FontAwesomeIcon icon={Icons.faInfoCircle} size="2px" className="mr-2"/>  <Typography className={classes.heading}>How/When will I recieve my electronic guides?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You will recieve an email approximately 3 days prior to the start date with a link to the guides. Guides will also be available in the Resource Center in the virtual environment the days of the event.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
        <FontAwesomeIcon icon={Icons.faInfoCircle} size="2px" className="mr-2"/>  <Typography className={classes.heading}>What is the seminar registration fee? What does the fee include?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
                Sign up early to take advantage of a <b>$50 registration discount.</b>
            </p>
            <h3>Seminar Fees</h3>
                <ul>
                    <li>Early registration fee through September 11: 
                    <ul>
                        <li>$450 per connection</li>
                        <li>$850 for <b>2</b> connections - *SimuLive and On-Demand Recordings available through December 31, 2020</li> 
                    </ul>
                  </li>
                  <br />
                  <li>Standard registration fee after September 11:
                    <ul>
                        <li>$500 per connection</li>
                        <li>$950 for <b>2</b> connections - *SimuLive and On-Demand Recordings available through December 31, 2020</li>
                        <li>$1,750 for <b>3</b> or more connections - *SimuLive and On-Demand Recordings available through December 31, 2020</li>
                    </ul>
                  </li>
                </ul>
            <p>This fee includes particpation in the Simulive training event, On-Demand recordings, a virtual social hour, a chance to win awesome prizes, a few special video surprises and access to the eletronic version of the meeting materials.</p>
            <p>Registrations are subject to the cancellation policy provided at the beginning of the registration page.</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
        <FontAwesomeIcon icon={Icons.faInfoCircle} size="2px" className="mr-2"/>  <Typography className={classes.heading}>How do I pay of the seminar?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You will be invoiced after the seminar.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
        <FontAwesomeIcon icon={Icons.faInfoCircle} size="2px" className="mr-2"/>  <Typography className={classes.heading}>What Discounts are available?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            There are two types of discounts available. Early Bird registration and Precision Client Event Package
            <ul>
                <li>
                    Early Bird registration: Register by September 11 and recieve a $50 discount
                </li>
                <li>
                    Precision Client Event Package: If you have subscribed to the Precision Client Event Package, you are eligible to recieve 1 free attendee for the Precision Eduction Seminar. You also recieve <b>3 free connections</b>.
                </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
        <FontAwesomeIcon icon={Icons.faInfoCircle} size="2px" className="mr-2"/>  <Typography className={classes.heading}>How can I modify an exisiting registration?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If you have any questions about your registration or need to make changes (including registrant substitutions, modifications and cancellations), please contact a member of our seminar team by email: <a href="mailto:educationseminars@fiserv.com">educationseminars@fiserv.com</a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
        <FontAwesomeIcon icon={Icons.faInfoCircle} size="2px" className="mr-2"/>  <Typography className={classes.heading}>If my plan changes, what is the cancellation policy?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Registration for this event will close two weeks prior to the start date. Registrations recieved after this date may be charged a $50 late registration fee. Changes or substitutions that occure after registration has closed will be assessed a $50 administration fee. Substitution of class attendees will be accepted until two weeks prior to the start date. No cancellations will be accepted within five business days of the Education Seminar start date. Registrations that are not cancelled wiil be invoiced for the full tuition.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}