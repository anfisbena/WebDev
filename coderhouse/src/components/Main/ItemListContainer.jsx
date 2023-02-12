import {Box,Slide} from '@mui/material';
import TabMenu from './modules/TabMenu.jsx';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Theme from './Theme.jsx';

export default function Main(){
  return(
    <Box sx={{ flexGrow: 1 }}>
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
        <TabMenu/>
      </Grid>
    </Box>
  )
}