import { AppBar,Toolbar,IconButton,Typography,Stack, Button,ThemeProvider} from "@mui/material"
import CakeIcon from '@mui/icons-material/Cake';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import theme  from "./colors.jsx";


export const NavBar=()=>{

  return(
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          
          <IconButton 
            edge="start" 
            color=""
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
              color="inherit" 
              aria-label="menu"
            >          
              <Typography 
                fontSize={16} 
                component="div" 
                sx={{ flexGrow: 1 }}  
                className="itemsInCart"
              >
                1
              </Typography>
              <ShoppingCartIcon/>
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
};