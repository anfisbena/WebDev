import {useState} from 'react';
import {Button, ButtonGroup, TextField} from '@mui/material';


function ButtonCount() {
  const [conteo,setConteo]=useState(0);
  return (
    <>
      <ButtonGroup variant="contained" aria-label="">
      <Button onClick={()=>{
        setConteo(conteo>0?conteo-1:conteo);
      }}>-</Button>
      <TextField
        id="filled-number"
        label="Cantidad"
        value={conteo}
        variant="outlined"
      />
      <Button onClick={()=>{
        setConteo(conteo+1);
      }}>+</Button>
      </ButtonGroup>

    </>
  )
}

export default ButtonCOunt