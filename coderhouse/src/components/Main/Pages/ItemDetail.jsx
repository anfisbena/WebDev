import { Button, Grid, Typography,TextField, Select, MenuItem, Box, FormControl, InputLabel } from "@mui/material";
import NavBar from "../../Header/NavBar.jsx";
import Image from 'mui-image';
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Items from '../../json/items.json'; //bdd local

function LoadItem(){
  const {categoria,id}=useParams(); //captura parametros del url en este caso categoria e id
  const [Item,setItem]=useState([]);
  
  const getItem=new Promise((resolve)=>{
    setTimeout(() => {
      resolve(Items[categoria])
    }, 2000);
  })
  //useEffect que llama a la promesa
  useEffect(()=>{
    getItem
      .then((response)=>response.find(item=>item.id===parseInt(id)))
      .then((db)=> setItem(db))
      .catch(err=>console.log(err))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  
  return Item;
}

function ItemDetail(){
  const Item=LoadItem();
  const [qty,setQty]=useState(0);
  const [flavour,setFlavour]=useState('sabor');
  const handleQty= (event)=>setQty(event.target.value)
  const handleFlavour = (event)=>setFlavour(event.target.value);
  const SubmitItem=()=>{console.log(`Agregaste ${qty} items`)}

  return (
    <Grid container>
      <NavBar/>
      <Grid item display='flex' xs={12} alignItems='center' justifyContent='center'>
        <Typography variant='h1'>{Item.name}</Typography>
      </Grid> 
      <Grid item display='flex' xs={12} sm={12} md={6} alignItems='center' justifyContent='center'>
        <Image
          src={Item.src}
        />
      </Grid>
      <Grid container display='flex' direction='column' xs={12} sm={12} md={6} alignItems='center' justifyContent='space-evenly'>
        <Grid>
          <Typography variant='h6' pl={2}>{Item.descripcion}</Typography>
          <Box sx={{ minWidth: 120 }} display='flex' p={1}>
            <FormControl>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              {/* <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={flavour}
                onChange={handleFlavour}
                label="Age"
                sx={{ minWidth: 120 }}
              >
                <MenuItem value={''}>Selecciona</MenuItem>
                {
                  Item.sabor.map((value)=>(
                    <MenuItem value={value}>{value}</MenuItem>
                  ))
                }
              </Select> */}
            </FormControl>
          </Box>
        </Grid>
        <Grid container display='flex' alignItems='center' justifyContent='space-evenly'>
          <Typography variant='h5'>{`$ ${Item.precio}`}</Typography>
          <Grid display='flex' direction='column'>
            <TextField
              id="outlined-number"
              label="Cantidad"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleQty}
            />
            <Button 
              variant='contained' 
              color='primary' 
              onClick={SubmitItem}
            >
              Agregar al carrito</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  ) 

  }

export default ItemDetail;