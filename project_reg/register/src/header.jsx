// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { IconButton } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: 'grey' }}> {/* Change this to your desired color */}
      <Toolbar>
        <IconButton color="inherit" component={Link} to="/" aria-label="home">
          <HomeIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Registration Page
        </Typography>
        <Button 
          color="inherit" 
          component={Link} 
          to="/register" 
          startIcon={<PersonAddIcon />} 
          style={{ backgroundColor: '#fff', color: '#1976d2', marginLeft: '10px' }} // Customize button color
        >
          Register
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
