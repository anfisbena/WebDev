import {Grid} from '@mui/material';
import ProductImage from '../modules/ProductImage.jsx';
import {useState,useEffect} from 'react';
import items from '../../json/items.json';

function Compartir(){
  const [listItems,setListItems]=useState([]);

  const getListItems=new Promise((resolve)=>{
    setTimeout(() => {
      resolve(items.compartir)
    }, 2000);
  })

  useEffect(()=>{
    getListItems
      .then((response)=>setListItems(response))
      .catch((error)=>console.log(error))
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return(
    <Grid container>
          <ProductImage Item={listItems} category="compartir"/>
    </Grid>
  )
}

export default Compartir;