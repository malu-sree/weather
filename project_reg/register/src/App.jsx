// src/App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header'; // Ensure the file name matches the actual file name
import RegistrationForm from './register'; // Ensure the file name matches the actual file name
import Footer from './footer'; // Ensure the file name matches the actual file name
import { Container, Typography } from '@mui/material';
import './App.css'; // Import the custom CSS for other styles
import backgroundImage from './images/img1.jpg';

function App() {
  const [message, setMessage] = useState('');

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh', // Make sure it covers the full height of the viewport
       // backgroundImage: `url(${backgroundImage})`,  // Path to your background image
        backgroundSize: 'cover', // Ensures the image covers the entire container
        backgroundPosition: 'center', // Centers the background image
        backgroundRepeat: 'no-repeat', // Prevents the background image from repeating
      }}
    >
      <Header />
      <Container
        maxWidth="sm"
        style={{
          marginTop: '20px',
          marginBottom: '20px',
          padding: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.9)', // White background with transparency
          borderRadius: '10px', // Rounded corners
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
          position: 'relative', // Ensure the container is positioned correctly
          zIndex: 1, // Bring this content above the background
        }}
      >
        <RegistrationForm setMessage={setMessage} />
        {message && (
          <Typography variant="h6" align="center" style={{ color: 'red', marginTop: '10px' }}>
            {message}
          </Typography>
        )}
      </Container>
      <Footer />
    </div>
  );
}

export default App;
