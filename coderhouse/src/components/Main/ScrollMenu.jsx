import { useState } from 'react';
import {Tabs,Typography,Tab,Box} from '@mui/material';



export default function ScrollableMenu() {
  const [tabIndex, setTabIndex] = useState(0);


  const handleChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  return (
    <Box sx={{ 
      // maxWidth: { xs: 320, sm: 480 }, 
      bgcolor: 'background.paper' }}
    >
      <Tabs value={tabIndex} onChange={handleChange} centered>
        <Tab label="Para endulzar" />
        <Tab label="Para compartir" />
      </Tabs>
      <Box sx={{ padding: 2 }}>
        {tabIndex === 0 && (
          <Box>
            <Typography>The first tab</Typography>
          </Box>
        )}
        {tabIndex === 1 && (
          <Box>
            <Typography>The second tab</Typography>
          </Box>
        )}
        {tabIndex === 2 && (
          <Box>
            <Typography>The third tab</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}
