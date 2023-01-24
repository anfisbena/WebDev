import { Grid, Typography } from "@mui/material";
import NavBar from "../../Header/NavBar.jsx";
import Image from 'mui-image';

function ProductTemplate(producto,imagen,descripcion){
  return (
    <Grid container>
      <NavBar/>
      <Grid item display='flex' xs={12} alignItems='center' justifyContent='center'>
        <Typography variant='h1'>Nombre del producto</Typography>
      </Grid> 
      <Grid item display='flex' xs={6} alignItems='center' justifyContent='center'>
        <Image
          src="https://http2.mlstatic.com/200-deditos-de-queso-para-tus-fiestas-D_NQ_NP_895541-MCO25940946344_092017-F.jpg"
        />
      </Grid>
      <Grid item display='flex' direction='column' xs={6} alignItems='center' justifyContent='center'>
      <Typography variant='h6'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </Typography>
      </Grid>
    </Grid>
  )
  }

export default ProductTemplate;