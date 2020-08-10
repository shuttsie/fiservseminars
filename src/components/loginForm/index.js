import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Auth0LoginButton from './../auth0LoginButton'
// import GoogleLoginButton from './../googleLoginButton'
import {MuiThemeProvider, withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { SignIn } from 'aws-amplify-react';
import theme from '../../themes';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    '&:focus': {
      borderColor: 'primary.dark'
    }
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: 'primary.main',
    '&:hover': {
      backgroundColor: 'primary.dark',
    }
  },
  link: {
    color: 'primary.main'
  },
  progress: {
    display: "flex",
    justifyContent: "center",
    margin: '25% auto'
  }
});

class CustomSignIn extends SignIn {
  constructor(props) {
    super(props);
    this._validAuthStates = ["signIn", "signedOut", "signedUp"];
  }

  showComponent() {
    const {classes} = this.props;

    if (window.location.search.includes('code')) {
      return (
        <div className={classes.progress}>
          Loading...
        </div>
      )
    }

    return (
      <MuiThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <div className={classes.form} >
            <Auth0LoginButton/>
            {/* <GoogleLoginButton/> */}
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                onChange={this.handleInputChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={this.handleInputChange}
              />
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={() => super.signIn()}
              >
                Sign In With COGNITO
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link className={classes.link} href="#" variant="body2" onClick={() => super.changeState("forgotPassword")}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link className={classes.link} href="#" variant="body2" onClick={() => super.changeState("signUp")}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </div>
      </Container>
        </MuiPickersUtilsProvider>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(CustomSignIn)