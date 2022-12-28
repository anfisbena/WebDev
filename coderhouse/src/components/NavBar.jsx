import { AppBar,Toolbar,IconButton,Typography,Stack, Button} from "@mui/material"
import CakeIcon from '@mui/icons-material/Cake';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const NavBar=()=>{
  return(
    <>
      <AppBar position="static">
        <Toolbar>
          
          <IconButton edge="start" color="inherit" aria-label="menu">
            <CakeIcon/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mocca Cakes
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color='inherit'>About Us</Button>
            <Button color='inherit'>Products</Button>
            <Button color='inherit'>Shipping</Button>
            <IconButton 
              edge="start" 
              color="inherit" 
              aria-label="menu"
            >          
              <Typography 
                fontSize={16} 
                component="div" 
                sx={{ flexGrow: 1 }} 
                color='#E4B7A0' 
                className="itemsInCart"
              >
                1
              </Typography>
              <ShoppingCartIcon/>
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  )
};