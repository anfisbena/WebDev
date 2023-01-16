import {Grid} from '@mui/material';
import ButtonCount from '../ButtonCount/ButtonCount.jsx';

function Compartir(){
  return(
    <Grid>
      <ul>
        <Grid display='flex'>
        <li>Palitos de queso</li>
        <ButtonCount/>
        </Grid>
        <Grid display='flex'>
        <li>Pasteles de Pollo</li>
        <ButtonCount/>
        </Grid>
        <Grid display='flex'>
        <li>Empanadas</li>
        <ButtonCount/>
        </Grid>
      </ul>
  </Grid>
  )
}

export default Compartir;