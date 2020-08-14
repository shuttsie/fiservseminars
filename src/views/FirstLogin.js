import React, { Component } from "react";

class FirstLogin extends Component {
  render() {
    return (
      <div className="next-steps my-5 seminar-container">
          <h2>Thank you for registering for the Premier Education Seminar!</h2>
          <p class="italic-important">
            We are thrilled you can join us for our three day virtual seminar.
          </p>
          <p>
            Please watch out for a registration confirmation email shortly. Once you recieve that, please verify your account to be able to log in the first time.
          </p>
      </div>
    );
  }
}

export default FirstLogin;