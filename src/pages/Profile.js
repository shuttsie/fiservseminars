import React from "react";
import { Container, Row, Col } from "reactstrap";

import Highlight from "../components/Highlight";
import Loading from '../components/Loading';
import Sidenav from "../components/SideNav";

import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

export const ProfileComponent = () => {
  const { user } = useAuth0();
  console.log(user);
  return (
    <div className="next-steps my-5 content-wrapper">
        <Sidenav />
      <div className="main-content-profile">
        <Container>
          <Row className='align-items-center profile-header mb-5 text-center text-md-left'>
            <Col md={2}>
              <img
                src={user.picture}
                alt='Profile'
                className='rounded-circle img-fluid profile-picture mb-3 mb-md-0'
              />
            </Col>
            <Col md>
              <h2>{user.name}</h2>

              <p className='lead text-muted'>{user.email}</p>
            </Col>
          </Row>
          <Row>
            <h2>
              Name: {user[`https://fiservseminars.com/first_name`]}{' '}
              {user[`https://fiservseminars.com/last_name`]}{' '}
            </h2>
          </Row>
          <Row>
            <h2>Bank Name: {user[`https://fiservseminars.com/bank_name`]}</h2>
          </Row>
          <Row>
            <h2>Bank Title: {user[`https://fiservseminars.com/bank_title`]}</h2>
          </Row>
          <Row>
            <h2>City: {user[`https://fiservseminars.com/city`]}</h2>
          </Row>
          <Row>
            <h2>State: {user[`https://fiservseminars.com/state`]}</h2>
          </Row>
          <Row>
            <h2>Seminar Date: {user[`https://fiservseminars.com/seminarDate`]}</h2>
          </Row>
        </Container>
      </div>
      
    </div>
    
  );
};

export default withAuthenticationRequired(ProfileComponent, {
  onRedirecting: () => <Loading />,
});