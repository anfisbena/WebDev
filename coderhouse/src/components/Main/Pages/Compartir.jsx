import {Grid,Typography} from '@mui/material';
import ProductImage from '../modules/ProductImage.jsx';

function Compartir(){

  return(
    <Grid container>
      <Grid item display='flex' direction='column'xs={12}>
        <ProductImage src="https://http2.mlstatic.com/200-deditos-de-queso-para-tus-fiestas-D_NQ_NP_895541-MCO25940946344_092017-F.jpg"/>
        <Typography 
      border={1}
      variant="h6" 
      style={{ position: 'absolute', 
        bottom: '10px', 
        left: '10px', 
        zIndex: '1' }}>
        Texto sobre la imagen
      </Typography>
      </Grid>
      <Grid item display='flex' direction='column'xs={12}>
        <ProductImage src="https://www.sweetysalado.com/wp-content/uploads/2016/09/DSC_0145N.jpg"/>
      </Grid>
      <Grid item display='flex' direction='column'xs={12}>
        <ProductImage src={"https://eatlikepinoy.com/wp-content/uploads/2020/05/beef-empanada-1024x683.jpg"}/>
      </Grid>
  </Grid>
  )

  
}

export default Compartir;