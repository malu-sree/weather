// src/components/Footer.js
import React from 'react';
import { Typography, AppBar, Toolbar, Grid, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook'; // Importing social media icons
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <AppBar position="static" style={{ top: 'auto', bottom: 0, backgroundColor: '#000000' }}> {/* Black background */}
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center">
          <Typography variant="body1" style={{ flexGrow: 1, textAlign: 'center', color: '#ffffff' }}> {/* White text */}
            © 2024 Your Company Name
          </Typography>
          <div>
            <IconButton color="inherit" aria-label="facebook">
              <FacebookIcon style={{ color: '#ffffff' }} />
            </IconButton>
            <IconButton color="inherit" aria-label="twitter">
              <TwitterIcon style={{ color: '#ffffff' }} />
            </IconButton>
            <IconButton color="inherit" aria-label="linkedin">
              <LinkedInIcon style={{ color: '#ffffff' }} />
            </IconButton>
            <IconButton color="inherit" aria-label="instagram">
              <InstagramIcon style={{ color: '#ffffff' }} />
            </IconButton>
          </div>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
