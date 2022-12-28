import React from 'react';
import {Box,Button,Drawer,List,ListItemIcon,ListItemButton,ListItemText} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CakeIcon from '@mui/icons-material/Cake';
import InfoIcon from '@mui/icons-material/Info';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

export default function BurgerMenu () {
  //List of menu items and their icons
  const listMenu=['Productos', 'Nosotros', 'Envios']
  const listData=(value)=>{
    switch(value){
      case 'Productos':return <CakeIcon/>;
      case 'Nosotros':return <InfoIcon/>;
      case 'Envios':return <RocketLaunchIcon/>;
      default:break;
    }
  }
  const anchor='left'; //This is the drawer orientation
  const [state, setState] = React.useState({left: false});
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (

    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>  
        {listMenu.map((text,index) => (
          <ListItemButton>
            <ListItemIcon>
              {listData(text)}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={anchor}>
        <Button onClick={toggleDrawer(anchor, true)}>
          <ListItemIcon>
            <MenuIcon/>
          </ListItemIcon>
        </Button>
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
      </React.Fragment>
    </div>
  );
}