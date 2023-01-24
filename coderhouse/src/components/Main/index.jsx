import {Box,Slide} from '@mui/material';
import ScrollableMenu from './ScrollMenu.jsx';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Theme from './Theme.jsx';
import Header from '../Header/index.jsx';

export default function Main(){
  return(
    <Box sx={{ flexGrow: 1 }}>
      <Header/>
      <Grid 
        container 
        disableEqualOverflow 
        display="flex" 
        style={Theme.BackgroundImage}  
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
      <Slide direction='left' in={true} timeout={1000} mountOnEnter unmountOnExit>
        <img src='https://pngimg.com/uploads/cake/cake_PNG13097.png' alt='main' z-index='1' width='35%'/>
      </Slide>
      </Grid>
      
      <Grid>
        <ScrollableMenu/>
      </Grid>
    </Box>
  )
}