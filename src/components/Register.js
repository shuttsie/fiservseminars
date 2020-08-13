import React, { Component } from 'react';
// import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { withAuthenticator } from 'aws-amplify-react';
import AuthTheme from '../config/AuthTheme';
import { signUpConfig } from '../config/AuthConfig';

class Register extends Component {
  render() {
    return (
        <div>
          My App
        </div>
    );
  }
}

export default withAuthenticator(Register, false, [], null, AuthTheme, signUpConfig);