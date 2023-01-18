import {Grid} from '@mui/material';
import ProductImage from '../modules/ProductImage.jsx';
import {useState,useEffect} from 'react';

const items=[
  {
    src:"https://http2.mlstatic.com/200-deditos-de-queso-para-tus-fiestas-D_NQ_NP_895541-MCO25940946344_092017-F.jpg",
    url:'https://www.mercadolibre.com.ar/'
  },
  {
    src:"https://www.sweetysalado.com/wp-content/uploads/2016/09/DSC_0145N.jpg",
    url:'#'
  },
  {
    src:"https://eatlikepinoy.com/wp-content/uploads/2020/05/beef-empanada-1024x683.jpg",
    url:'#'
  }
]

function Compartir(){
  const [listItems,setListItems]=useState([]);

  const getListItems=new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(items)
    },2000)
  });

  useEffect(()=>{
    getListItems
    .then((response)=>setListItems(response))
    .catch((error)=>console.log(error))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  
  return(
    <Grid container>
      {listItems.map((item,index)=>(
        <Grid item display='flex' direction='column'xs={12} key={index}>
        <ProductImage
          src={item.src}
          url={item.url}
        />
        </Grid>
      ))}
    </Grid>
  )
}

export default Compartir;