import {Box,Grid} from '@mui/material';
import ProductImage from '../modules/ProductImage.jsx';

function Endulzar() {
  return (
    <Box>
      <Grid container>
        <Grid item display='flex' direction='column'xs={12}>
            <ProductImage src="https://images.jumpseller.com/store/bread-cake/4667827/torta_hojarasca_bread_cake_22.jpg?1601152913"/>
        </Grid>
        <Grid item display='flex' direction='column'xs={12}>
          <ProductImage src="https://hispanaglobal.com/wp-content/uploads/2020/10/Candy-Charcuterie-Board-Set-5-11-rotated.jpg"/>
        </Grid>
        <Grid iitem display='flex' direction='column'xs={12}>
          <ProductImage src="https://http2.mlstatic.com/200-deditos-de-queso-para-tus-fiestas-D_NQ_NP_895541-MCO25940946344_092017-F.jpg"/>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Endulzar;