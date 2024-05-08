import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const ClientHeader = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" style={{backgroundColor:"green"}}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Client 
        </Typography>
        <Button color="inherit" >
          <Link style={{color:"black",textDecoration:"none"}} to={"/"}>Home</Link>
        </Button>

        <Button color="inherit">
          <Link style={{color:"black",textDecoration:"none"}} to={"/countries"}>ClientCountries</Link>
        </Button>

        <Button  color="inherit">
          <Link style={{color:"black",textDecoration:"none"}} to={"/about"}>About</Link>
        </Button>

        <Button color="inherit">
          <Link style={{color:"black",textDecoration:"none"}} to={"/contact"}>contact</Link>
        </Button>
       
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default ClientHeader