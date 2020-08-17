import React, { useState } from "react";
import { NavLink as RouterNavLink }from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();
  const toggle = () => setIsOpen(!isOpen);

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  return (
    <div className="nav-container">
      <Navbar color="light" dark expand="md">
        <Container>
          <a href="/"><NavbarBrand className="logo" /></a>
          <NavLink
            // href="http://localhost:3000"
            href="https://precision.fiservseminars.com"
            exact
            activeClassName="router-link-exact-active"
          >
            Welcome
          </NavLink>
          <NavLink
            // href="http://localhost:3000/dates-and-locations"
            href="https://precision.fiservseminars.com/dates"
            exact
            activeClassName="router-link-exact-active"
          >
            Dates
          </NavLink>
          <NavLink
            href="http://virtualtrainer.fiservapps.com/TrainGuides/2020/2020_EducationSeminar_Premier_OverviewandAgenda.pdf"
            target="_blank"
            exact
            activeClassName="router-link-exact-active"
          >
            Agenda
          </NavLink>
          <NavLink
            // href="http://localhost:3000/faqs"
            href="https://precision.fiservseminars.com/faqs"
            exact
            activeClassName="router-link-exact-active"
          >
            FAQs
          </NavLink>
          <NavLink
            // href="http://localhost:3000/contact-us"
            href="https://precision.fiservseminars.com/contact-us"
            exact
            activeClassName="router-link-exact-active"
          >
            Contact Us
          </NavLink>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="d-none d-md-block" navbar>
              {!isAuthenticated && (
                <NavItem>
                  <Button
                    id="qsRegisterBtn"
                    color="primary"
                    className="btn-margin"
                    onClick={() => loginWithRedirect()}
                  >
                    Register
                  </Button>
                </NavItem>
              )}    
            </Nav>
            {!isAuthenticated && (
              <Nav className="d-md-none" navbar>
                <NavItem>
                  <Button
                    id="qsRegisterBtn"
                    color="primary"
                    block
                    onClick={() => loginWithRedirect()}
                  >
                    Register
                  </Button>
                </NavItem>
              </Nav>
            )}
            {isAuthenticated && (
              <Nav
                className="d-md-none justify-content-between"
                navbar
                style={{ minHeight: 170 }}
              >
                <NavItem>
                  <span className="user-info">
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile d-inline-block rounded-circle mr-3"
                      width="50"
                    />
                    <h6 className="d-inline-block">{user.name}</h6>
                  </span>
                </NavItem>
                <NavItem>
                  <FontAwesomeIcon icon="user" className="mr-3" />
                  <RouterNavLink
                    to="/profile"
                    activeClassName="router-link-exact-active"
                  >
                    Profile
                  </RouterNavLink>
                </NavItem>
                <NavItem>
                  <FontAwesomeIcon icon="power-off" className="mr-3" />
                  <RouterNavLink
                    to="#"
                    id="qsLogoutBtn"
                    onClick={() => logoutWithRedirect()}
                  >
                    Log out
                  </RouterNavLink>
                </NavItem>
              </Nav>
            )}
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
