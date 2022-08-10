import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import LogoApp from '../img/logo-app.png';

export default function Navbar() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          {/* Center items in the middle of the bar */}
          <Box flexGrow={1}>
          <Typography variant="h6">
            IOT Dashboard
          </Typography>
          </Box>
            <img src={LogoApp} alt="Logo" style={{ maxHeight: '30px', paddingRight: '10px' }}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
