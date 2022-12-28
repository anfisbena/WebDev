import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[200],
    },
    secondary: {
      main: '#f44336',
    },
  },
});

export default(createTheme(theme))