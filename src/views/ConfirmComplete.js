import React, { Component } from "react";

class ConfirmComplete extends Component {
  render() {
    return (
      <div className="next-steps my-5 seminar-container">
          <h2>You are now registered for the following seminars:</h2>
          <p class="italic-important">
            Access to the seminar information will be available a week prior to the start of the seminar. A reminder email will be sent out in advance.
          </p>
          <p>
            Please feel free to check out more information on the upcoming seminars. We are excited you can join us for our three day virtual seminar.
          </p>
      </div>
    );
  }
}

export default ConfirmComplete;