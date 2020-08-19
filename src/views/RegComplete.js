import React from "react";
import Loading from "../components/Loading";
import { withAuthenticationRequired } from "@auth0/auth0-react";

import Cookies from 'universal-cookie';

const cookies = new Cookies();

cookies.set('reg', 'RegistrationComplete', { path: '/' });
console.log(cookies.get('RegistrationComplete')); // Pacman

export const RegComplete = () => {
  return (
    <div className="next-steps my-5 seminar-container">
        <h2>Your registration is now complete!</h2>
        <p class="italic-important">
          You will be able to access the virtual seminar 5 days prior to the start date. At that time, you will be able to login and create your user profile and set preferences. Until then, feel free to browse here for more pre-seminar information.
        </p>
        <p>
          We are excited you can join us for this exciting seminar. We will see you soon!
        </p>
    </div>
  );
};

export default withAuthenticationRequired(RegComplete, {
  onRedirecting: () => <Loading />,
});