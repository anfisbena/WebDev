import {IconButton} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";



function CartWidget(){
    const {cart}=useContext(CartContext)
    console.log(cart.length)
    return (
        <Link href='/checkout'>
      <IconButton edge="start" aria-label="menu" >
        {cart.length}
        <ShoppingCartIcon/>
      </IconButton>
    </Link>
    )

};

export default CartWidget;