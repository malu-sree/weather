import React, { useState } from 'react';
import {
  TextField,
  Button,
  Box,
  Container,
  Typography,
  Paper,
  InputAdornment,
} from '@mui/material';
import { Search as SearchIcon, Cancel as ClearIcon, LocationCity as CityIcon } from '@mui/icons-material'; // MUI Icons

function SearchBar({ fetchWeather }) {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (!city) {
      alert('Please enter a city name');
      return;
    }
    fetchWeather(city);
  };

  const handleClear = () => {
    setCity('');
  };

  return (
    <Container
      sx={{
        position: 'relative',
        height: '60vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'url(../images/img1.jpg)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
       <Paper
        elevation={10}
        sx={{
          padding:17,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: 10,
        //   display: 'flex',
          flexDirection: 'column',
         // alignItems: 'center',
        }}>
        <Typography
          variant="h4"
          sx={{
            fontSize: {
              xs: '24px',
              sm: '28px',
              md: '32px',
              lg: '36px',
            },
            fontWeight: 'bold',
            textAlign: 'center',
            mb: 3,
          }}
        >
          Weather Search
        </Typography>

        <TextField
          variant="outlined"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          fullWidth
          sx={{
            mb: 2,
            '& .MuiOutlinedInput-root': {
              borderRadius: 5,
            },
            '& .MuiInputBase-input': {
              fontSize: '1.5rem',
              padding: '10px',
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CityIcon />
              </InputAdornment>
            ),
          }}
        />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}
            startIcon={<SearchIcon />}
            sx={{
              flex: 1,
              mr: 1,
              padding: '12px',
              fontSize: '1.2rem',
              '&:hover': {
                backgroundColor: '#0056b3', // Darker blue on hover
              },
            }}
          >
            Get Weather
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleClear}
            startIcon={<ClearIcon />}
            sx={{
              flex: 1,
              ml: 1,
              padding: '12px',
              fontSize: '1.2rem',
              '&:hover': {
                backgroundColor: '#5a6268', // Darker gray on hover
              },
            }}
          >
            Clear
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default SearchBar;
