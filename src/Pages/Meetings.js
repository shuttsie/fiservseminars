import React from 'react'
import Left from '../components/left'
import Right from '../components/right'
import Sidenav from '../components/sidenav'
// import Loading from '../components/loading';
// import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

export const Meetings = () => {
  // const { user } = useAuth0();
  // console.log(user);
  return (
    <div>
        <div className="wrapper">
          <div className="navbar sidebar">
            <Sidenav/>
          </div>
          <div className="main-content">
            <Left/>
            <Right/>
          </div>
        </div> 
    </div>
  );
};

export default Meetings
// export default withAuthenticationRequired(Meetings, {
//   onRedirecting: () => <Loading />,
// });