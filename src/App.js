import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SimpleAccordion from "./components/FAQ";
import Contact from "./components/Contact";
import Dates from "./components/Dates";
import Register from "./components/Register";
import Home from "./views/Home";
import FirstLogin from "./views/FirstLogin";
import Profile from "./views/Profile";
import history from "./utils/history";

// styles
import "./Overrides.scss";
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
            <Route path="http://virtualtrainer.fiservapps.com/TrainGuides/2020/2020_EducationSeminar_Precision_OverviewandAgenda.pdf" />
            <Route path="/faqs" component={SimpleAccordion} />
            <Route path="/contact-us" component={Contact} />
            <Route path="/successful-login" component={Register} />
          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
