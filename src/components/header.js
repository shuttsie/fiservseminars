import React, { useState } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
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
      <Navbar color="light" light expand="md">
        <Container>
        <div className="navbar-wrapper">
          <nav className="navbar navbar-expand announcement">
            <p>
              UPCOMING CONFERENCE: How to use Access Manager to it's fullest potential. <a href="/">Grab a seat in the Virtual Classroom</a>
            </p>
          </nav>
          <nav className="navbar navbar-expand">
            <div className="logo">
              <NavLink className="text-center logo" to="/">
                <img src="https://s3.us-east-2.amazonaws.com/fiservseminars-media.com/logo.png" height="84px" alt="logo"></img>
                {/* <h1 className="navbar-brand mb-0 text-primary">Authenticaysh</h1> */}
              </NavLink>
            </div>
            <div className="navbar-nav-scroll authentication">
            {/* <NavbarToggler onClick={toggle} /> */}
              <Collapse isOpen={isOpen} navbar>
                <Nav className="d-none d-md-block" navbar>
                  {!isAuthenticated && (
                    <NavItem>
                      <Button
                        id="qsLoginBtn"
                        color="primary"
                        className="btn-margin"
                        onClick={() => loginWithRedirect()}
                      >
                        Log in
                      </Button>
                    </NavItem>
                  )}
                  {isAuthenticated && (
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret id="profileDropDown">
                        <img
                          src={user.picture}
                          alt="Profile"
                          className="nav-user-profile rounded-circle"
                          width="50"
                        />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>{user.name}</DropdownItem>
                        <DropdownItem
                          tag={RouterNavLink}
                          to="/profile"
                          className="dropdown-profile"
                          activeClassName="router-link-exact-active"
                        >
                          <FontAwesomeIcon icon="user" className="mr-3" /> Profile
                        </DropdownItem>
                        <DropdownItem
                          id="qsLogoutBtn"
                          onClick={() => logoutWithRedirect()}
                        >
                          <FontAwesomeIcon icon="power-off" className="mr-3" /> Log
                          out
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  )}
                </Nav>
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
            </div>
          </nav>
         </div>
        </Container>
      </Navbar>       
    </div>
  );
};

export default NavBar;