import { 
  Toolbar,
  IconButton,
  Typography,
  Stack, 
  Button,
} from "@mui/material"
import CakeIcon from '@mui/icons-material/Cake';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const toolBarContent=()=>{
  return(
    <Toolbar>
      
      <IconButton 
        edge="start" 
        aria-label="menu"
      >
        <CakeIcon/>
      </IconButton>
      
      <Typography 
        variant="h6" 
        component="div" 
        sx={{ flexGrow: 1 }}
      >
        Mocca Cakes
      </Typography>

      <Stack direction="row" spacing={2}>

        <Button color='inherit'>Quienes somos</Button>
        <Button color='inherit'>Productos</Button>
        <Button color='inherit'>Envios</Button>

        <IconButton 
          edge="start" 
          aria-label="menu"
        >          
          <Typography 
            fontSize={16} 
            component="div" 
            sx={{ flexGrow: 1 }}  
            className="itemsInCart"
          >
            1 {/*Here goes the number of items in the cart */}
          </Typography>
          <ShoppingCartIcon/>
        </IconButton>

      </Stack>
    </Toolbar>
  )
}

export default toolBarContent;