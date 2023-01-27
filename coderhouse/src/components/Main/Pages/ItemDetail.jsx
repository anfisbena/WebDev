import { Grid, Typography } from "@mui/material";
import NavBar from "../../Header/NavBar.jsx";
import Image from 'mui-image';
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Items from '../../json/items.json';
import ButtonCount from '../modules/ButtonCount.jsx';


function ItemDetail(){
  const {categoria,id}=useParams(); //captura parametros del url en este caso categoria e id
  const [Item,setItem]=useState([])
  
  const getItem=new Promise((resolve)=>{
    setTimeout(() => {
      resolve(Items[categoria])
    }, 2000);
  })
  
  useEffect(()=>{
    getItem
      .then((response)=>{
        setItem(response.find(item=>item.id===parseInt(id)))
      .catch(err=>console.log(err))
  })
  })

  return (
    <Grid container>
      <NavBar/>
      <Grid item display='flex' xs={12} alignItems='center' justifyContent='center'>
        <Typography variant='h1'>{Item.name}</Typography>
      </Grid> 
      <Grid item display='flex' xs={6} alignItems='center' justifyContent='center'>
        <Image
          src={Item.src}
        />
      </Grid>
      <Grid container display='flex' direction='column' xs={6} alignItems='center' justifyContent='center'>
        <Typography variant='h6'>{Item.descripcion}</Typography>
        <Grid item display='flex' alignItems='center'>
          <Typography variant='h5'>{Item.precio}</Typography>
          <ButtonCount/>
        </Grid>
      </Grid>
    </Grid>
  )
  }

export default ItemDetail;