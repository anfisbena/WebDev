import { Grid, Typography } from "@mui/material";

function ProductTemplate(){
  return (
    <Grid container>
      <Grid item display='flex' xs={12} alignItems='center' justifyContent='center'>
        <Typography variant='h1'>Descripcion</Typography>
      </Grid>
    </Grid>
  )
  }

export default ProductTemplate;