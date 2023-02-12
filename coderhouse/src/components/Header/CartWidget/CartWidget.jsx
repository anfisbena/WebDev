import {IconButton} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "@mui/material";
// import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/CartContext";


function CartWidget(){
    const {cart}=useContext(CartContext)
    const [item,setItem]=useState([])
    const sessionCart=sessionStorage.getItem('cart')?sessionStorage.getItem('cart'):'[]'

    useEffect(()=>{
    setItem(cart)
    console.log(item)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    return (
        <Link href='/checkout'>
      <IconButton edge="start" aria-label="menu" >
        {JSON.parse(sessionCart).length}        
        <ShoppingCartIcon/>
      </IconButton>
    </Link>
    )

};

export default CartWidget;