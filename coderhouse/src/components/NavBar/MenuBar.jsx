import { 
  Toolbar,
  IconButton,
  Typography,
  Stack} from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BurgerMenu from "./BurgerMenu";

const MenuBar=()=>{
  return(
    <Toolbar>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        sx={{ flexGrow: 1 }}
      >
        <BurgerMenu/>
        
        <Typography variant="h6" component="div">
          Mocca Cakes
        </Typography>
        
        <IconButton edge="start" aria-label="menu">
          
          <Typography fontSize={16} component="div" sx={{ flexGrow: 1 }}  className="itemsInCart">
            1 {/*Here goes the number of items in the cart */}
          </Typography>          
          
          <ShoppingCartIcon/>
        
        </IconButton>

      </Stack>
    </Toolbar>
  )
}

export default MenuBar;