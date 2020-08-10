/*eslint no-undef: "error"*/
import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
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
      redirectSignIn
    },
    aws_user_pools_web_client_id
  } = aws_config;
  const url = new URL(`https://${domain}/oauth2/authorize?redirect_uri=${redirectSignIn}&response_type=${responseType.toUpperCase()}&client_id=${aws_user_pools_web_client_id}&scope=${scope.join(' ')}`);
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