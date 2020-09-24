import React, { Component } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './App.css';
import Home from './Pages/Home'

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
      <Navbar>
          <nav className="navbar navbar-expand announcement">
            <p>
              UPCOMING CONFERENCE: How to use Access Manager to it's fullest potential. <a href="/">Grab a seat in the Virtual Classroom</a>
            </p>
          </nav>
          <nav className="navbar navbar-expand">
             <div className="logo">
               <a href="/home"><img src="https://s3.us-east-2.amazonaws.com/fiservseminars-media.com/logo.png" height="84px" alt="logo"></img></a>
             </div>
          </nav>
          <nav className="navbar-nav-scroll authentication">
              {
                  !isAuthenticated() && (
                      <p
                          className="btn-margin signin"
                          onClick={this.login.bind(this)}
                      ><i className="fa fa-fw fa-sign-in-alt" style={{ fontSize: '3rem', color:'#ff6600' }} /><br/>
                        Login
                      </p>
                  )
              }
              {
                  isAuthenticated() && (
                      <p
                          className="btn-margin profile"
                          onClick={this.goTo.bind(this, 'profile')}
                      ><i className="fa fa-fw fa-user" style={{ fontSize: '3rem', color:'#ff6600' }} /><br/>
                        Profile
                      </p>
                  )
              }
              {
                  isAuthenticated() && (
                      <p
                          className="btn-margin logout"
                          onClick={this.logout.bind(this)}
                      ><i className="fa fa-fw fa-sign-out-alt" style={{ fontSize: '3rem', color:'#ff6600', cursor:'pointer' }} /><br/>
                        Log Out
                      </p>
                  )
              }
          </nav>
        </Navbar>
        <Home/>
        </div>
    );
  }
}

export default App;