import { Button, Grid, Typography,TextField } from "@mui/material";
import NavBar from "../../Header/NavBar.jsx";
import Image from 'mui-image';
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Items from '../../json/items.json';



function ItemDetail(){
  const [qty,setQty]=useState(0)
  const {categoria,id}=useParams(); //captura parametros del url en este caso categoria e id
  const [Item,setItem]=useState([])
  const getQty= (val)=>setQty(val.target.value)
  const SubmitItem=()=>{console.log(`Agregaste ${qty} items`)
}
  
  const getItem=new Promise((resolve)=>{
    setTimeout(() => {
      resolve(Items[categoria])
    }, 2000);
  })
  
  useEffect(()=>{
    getItem
      .then((response)=>{
        setItem(response.find(item=>item.id===parseInt(id)))
      })
      .catch(err=>console.log(err))
  })

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
        </Grid>
        <Grid item display='flex' alignItems='center' justifyContent='space-evenly'>
          <Typography variant='h5'>{`$ ${Item.precio}`}</Typography>
          <Grid display='flex' direction='column' justifyContent='space-evenly'>
            <TextField
              id="outlined-number"
              label="Cantidad"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={getQty}
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