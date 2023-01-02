import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Image from './main.png';

const Theme = createTheme();
  Theme.palette= 
  {
      primary: {
        main: purple[200],
      },
      secondary: {
        main: '#f44336',
      },
  };
    
  Theme.typography=
  {
    fontSize: 12,
  }

  Theme.BackgroundImage= {
    backgroundImage: `url(${Image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '75% 100%',
    }

export default(createTheme(Theme));