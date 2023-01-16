import { useState } from 'react';
import {Tabs,Tab,Box} from '@mui/material';
import Endulzar from './Pages/Endulzar.jsx';
import Compartir from './Pages/Compartir.jsx';


function ScrollableMenu() {
  const [tabIndex, setTabIndex] = useState(0);
  const handleChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  return (
    <Box sx={{  
      bgcolor: 'background.paper' }}
    >
      <Tabs value={tabIndex} onChange={handleChange} centered>
        <Tab label="Para endulzar" />
        <Tab label="Para compartir" />
      </Tabs>
      <Box sx={{ padding: 2 }}>
        {tabIndex === 0 && (
          <Endulzar/>
        )}
        {tabIndex === 1 && (
          <Compartir/>
        )}
      </Box>
    </Box>
  );
}

export default ScrollableMenu;