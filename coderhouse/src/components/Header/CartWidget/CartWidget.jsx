import {IconButton,Typography} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget=()=>{
  return(
    <IconButton edge="start" aria-label="menu">
      <Typography fontSize={16} component="div" sx={{ flexGrow: 1 }}  className="itemsInCart">
        1 {/*Here goes the number of items in the cart */}
      </Typography>          
      <ShoppingCartIcon/>
    </IconButton>
)};

export default CartWidget();