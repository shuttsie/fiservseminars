/*global AWS_CONFIG */
/*eslint no-undef: "error"*/
import React, {Component} from 'react';

import aws_config from '../../aws_config';

const styles = theme => ({
  submit: {
    margin: theme.spacing(1, 0, 1)
  },
});

function loginToAuth0() {
  const {
    oauth: {
      domain,
      scope,
      responseType,
      auth0_identity_provider,
      redirectSignIn
    },
    aws_user_pools_web_client_id
  } = aws_config;
  const url = new URL(`https://${domain}/oauth2/authorize?identity_provider=${auth0_identity_provider}&redirect_uri=${redirectSignIn}&response_type=${responseType}&client_id=${aws_user_pools_web_client_id}&scope=${scope}`);
  window.location.assign(url.toString());
}

class Auth0LoginButton extends Component {
  render() {
    const {classes} = this.props;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => loginToAuth0()}
          className={classes.submit}
        >
          Sign In With Auth0
        </Button>
      </Container>
    );
  }
}

export default withStyles(styles)(Auth0LoginButton)