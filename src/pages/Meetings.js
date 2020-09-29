import React, { Fragment } from 'react';
import Sidenav from "../components/SideNav";
import Left from "../components/Left";
import Right from "../components/Right";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/Loading";
import Notes from '../components/Notes'

const Meetings = () => (
  <Fragment>
    <div className="next-steps my-5 content-wrapper">
      <Sidenav />
      <div className="main-content">
        <Left />
        <section className="right meetings">
            <Notes />
        </section>
      </div>
    </div>
  </Fragment>
);

export default withAuthenticationRequired(Meetings, {
  onRedirecting: () => <Loading />,
});
