import {IconButton,Typography} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "@mui/material";

const CartWidget=()=>{
  return(
    <Link href='/checkout'>
      <IconButton edge="start" aria-label="menu" >
        <Typography fontSize={16} component="div" sx={{ flexGrow: 1 }}  className="itemsInCart">
          420 {/*Here goes the number of items in the cart */}
        </Typography>          
        <ShoppingCartIcon/>
      </IconButton>
    </Link>
)};

export default CartWidget();