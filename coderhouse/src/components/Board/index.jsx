import {Box} from '@mui/material';
import MenuCard from './MenuCard.jsx';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

export default function LandPage(){
  return(
    <Box sx={{ flexGrow: 1 }} mt={5} mb={5}>
      <Grid container disableEqualOverflow>
        <Grid xl={4} lg={4} md={4} sm={10} xs={11} display="flex" justifyContent="center" alignItems="center"pt={3} pb={3}>
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