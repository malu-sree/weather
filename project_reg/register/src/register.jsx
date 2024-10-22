// src/components/RegistrationForm.js
import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Paper, InputAdornment } from '@mui/material';
import axios from 'axios';
import PersonIcon from '@mui/icons-material/Person'; // Username icon
import EmailIcon from '@mui/icons-material/Email'; // Email icon
import LockIcon from '@mui/icons-material/Lock'; // Password icon

const RegistrationForm = ({ setMessage }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/register', {
        username, email, password
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Registration failed');
    }
  };

  return (
    <Paper elevation={3} style={{ padding: '40px', marginTop: '20px', backgroundColor: '#f7f7f7' }}>
      <Typography variant="h3" align="center" style={{ marginBottom: '20px' }}>Register</Typography>
      <form onSubmit={handleRegister}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
              style={{ marginBottom: '20px', height: '60px' }} // Increase height
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
              style={{ marginBottom: '20px', height: '60px' }} // Increase height
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
              style={{ marginBottom: '20px', height: '60px' }} // Increase height
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              style={{ height: '60px' }} // Increase button height
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default RegistrationForm;
