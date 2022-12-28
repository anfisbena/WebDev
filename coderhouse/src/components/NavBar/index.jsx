import { 
  AppBar,
  ThemeProvider} from "@mui/material"
import Theme  from "../Theme.jsx";
import MenuBar from "./MenuBar.jsx";

const NavBar=()=>{

  return(
    <ThemeProvider theme={Theme}>
      <AppBar position="static">
        <MenuBar/>
      </AppBar>
    </ThemeProvider>
  )
};

export default NavBar;