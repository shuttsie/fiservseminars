import React from "react";
import Loading from "../components/Loading";
import { withAuthenticationRequired } from "@auth0/auth0-react";

export const FirstLogin = () => {
  return (
    <div className="next-steps my-5 seminar-container">
        <h2>Thank you registering!</h2>
        <p class="italic-important">
          We are excited you can join us for this exciting seminar.
        </p>
        <p>
          Please watch out for a registration confirmation email shortly.
        </p>
    </div>
  );
};

export default withAuthenticationRequired(FirstLogin, {
  onRedirecting: () => <Loading />,
});