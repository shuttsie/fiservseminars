import {createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: { useNextVariants: true },
  palette: {
    primary: {
      light: '#FD8AFD',
      main: '#a918fe',
      dark: '#7208fe',
      contrastText: '#ffffff',
    }
  },
});

export default theme;