import {Box} from '@mui/material';
import MenuCard from './MenuCard.jsx';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Theme from './Theme.jsx';

export default function LandPage(){
  return(
    <Box sx={{ flexGrow: 1 }}>
      <Box container disableEqualOverflow display="flex" style={Theme.BackgroundImage}  borderColor="primary.main" borderTop={4} borderBottom={4}>
          <img src='https://pngimg.com/uploads/cake/cake_PNG13097.png' alt='main' z-index='1' width='35%'/>
      </Box>
      <Grid container disableEqualOverflow display="flex">
        <Grid xl={4} lg={4} md={4} sm={10} xs={11} display="flex" justifyContent="center" alignItems="center" pt={3} pb={3}>
          <MenuCard
            image={"https://temptationcakes.co.nz/wp-content/uploads/2015/11/030.jpg"} 
            category={'Pasteles'}/>
        </Grid>
        <Grid item xl={4} lg={4} md={4} sm={10} xs={11} display="flex" justifyContent="center" alignItems="center" pt={3} pb={3}>
          <MenuCard 
            image={"https://i.ytimg.com/vi/wwXi7MQuHmM/maxresdefault.jpg"} 
            category={'Postres'}/>
        </Grid>
        <Grid item xl={4} lg={4} md={4} sm={10} xs={11} display="flex" justifyContent="center" alignItems="center" pt={3} pb={3}>
          <MenuCard
            image={"https://www.naranjascorbera.com/wp-content/uploads/18-recetas-de-productos-horneados-tan-deliciosos-que-incluso-los.jpg"} 
            category={'Horneados'}/>
        </Grid>
      </Grid>
    </Box>
  )
}