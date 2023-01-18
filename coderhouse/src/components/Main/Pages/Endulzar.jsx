import {Grid} from '@mui/material';
import ProductImage from '../modules/ProductImage.jsx';
import {useState,useEffect} from 'react';

const items=[
  {
    src:"https://images.jumpseller.com/store/bread-cake/4667827/torta_hojarasca_bread_cake_22.jpg?1601152913",
    url:'https://www.mercadolibre.com.ar/'
  },
  {
    src:"https://hispanaglobal.com/wp-content/uploads/2020/10/Candy-Charcuterie-Board-Set-5-11-rotated.jpg",
    url:'#'
  },
  {
    src:"https://3.bp.blogspot.com/-8f_jLhkiTaM/T19SX2KspHI/AAAAAAAAB4c/0_6G_2hT7vw/s1600/galletas-caseras-varias.JPG",
    url:'#'
  }
]

function Endulzar(){
  const [listItems,setListItems]=useState([]);

  const getListItems=new Promise((resolve)=>{
    setTimeout(() => {
      resolve(items)
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
      {listItems.map((item)=>(
        <Grid item display='flex' direction='column' xs={12}>
          <ProductImage
            src={item.src}
            url={item.url} 
            />
        </Grid>
      ))}
    </Grid>
  )
}

export default Endulzar;