import {Grid} from '@mui/material';
import ProductImage from '../modules/ProductImage.jsx';
import {useState,useEffect} from 'react';
import firebase from '../../json/firebase.jsx'

function Compartir(){
  const [listItems,setListItems]=useState([]);

  useEffect(()=>{
    firebase
      .then((response)=>response.filter(val=>val.category==='compartir'))
      .then((response)=>setListItems(response))
      .catch((error)=>console.log(error))
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return(
    <Grid container>
          <ProductImage objectList={listItems} category="compartir"/>
    </Grid>
  )
}

export default Compartir;