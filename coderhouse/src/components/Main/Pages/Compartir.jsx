import {Grid, Typography} from '@mui/material';
import ButtonCount from '../modules/ButtonCount.jsx';
import ProductImage from '../modules/ProductImage.jsx';

function Compartir(){

  return(
    <Grid container>
      <Grid item display='flex' direction='column' xs={12} sm={12} md={4} alignItems='center' justifyContent='center'>
        <ProductImage src="https://http2.mlstatic.com/200-deditos-de-queso-para-tus-fiestas-D_NQ_NP_895541-MCO25940946344_092017-F.jpg"/>
        <Typography >Palitos de queso</Typography>
        <ButtonCount/>
      </Grid>
      <Grid item display='flex' direction='column' xs={12} sm={12} md={4} alignItems='center' justifyContent='center'>
        <ProductImage src="https://www.sweetysalado.com/wp-content/uploads/2016/09/DSC_0145N.jpg"/>
        <Typography>Pasteles de Pollo</Typography>
        <ButtonCount/>
      </Grid>
      <Grid item display='flex' direction='column' xs={12} sm={12} md={4} alignItems='center' justifyContent='center'>
        <ProductImage src={"https://eatlikepinoy.com/wp-content/uploads/2020/05/beef-empanada-1024x683.jpg"}/>
        <Typography>Empanadas</Typography>
        <ButtonCount/>
      </Grid>
  </Grid>
  )

  
}

export default Compartir;