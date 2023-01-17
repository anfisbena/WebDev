import {useState} from 'react';
import {Button, ButtonGroup, TextField} from '@mui/material';


function ButtonCount() {
  const [conteo,setConteo]=useState(0);
  return (
      <ButtonGroup 
        size='small' 
        sx={{maxWidth:200}} 
        variant="contained">
        <Button onClick={()=>{
          setConteo(conteo>0?conteo-1:conteo);
        }}>-</Button>
        <TextField
          size='small'
          id="filled-number"
          value={conteo}
        />
        <Button onClick={()=>{
          setConteo(conteo+1);
        }}>+</Button>
      </ButtonGroup>
  )
}

export default ButtonCount