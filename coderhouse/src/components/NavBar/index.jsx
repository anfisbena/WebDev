import { 
  AppBar,
  ThemeProvider
} from "@mui/material"
import Theme  from "../Theme.jsx";
import ToolBarContent from "./toolbar.jsx";

const NavBar=()=>{

  return(
    <ThemeProvider theme={Theme}>
      <AppBar position="static">
        <ToolBarContent/>
      </AppBar>
    </ThemeProvider>
  )
};

export default NavBar;