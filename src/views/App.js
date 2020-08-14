import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Dates from "./components/Dates";
import FirstLogin from "./views/FirstLogin";
import Home from "./views/Home";
import SimpleAccordion from "./views/FAQ";
import Profile from "./views/Profile";

import history from "./utils/history";

// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const App = () => {

  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
        <Container className="flex-grow-1 mt-5">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/dates" component={Dates} />
            <Route path="http://virtualtrainer.fiservapps.com/TrainGuides/2020/2020_EducationSeminar_Premier_OverviewandAgenda.pdf" />
            <Route path="/faqs" component={SimpleAccordion} />
            <Route path="/contact-us" component={Contact} />
            <Route path="/successful-login" exact component={FirstLogin} />
          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  );
};

export default App;