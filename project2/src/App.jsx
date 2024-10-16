import React, { useState } from 'react';
import Header from './components/header';
import SearchBar from './components/searchbar';
import WeatherInfo from './components/weatherinfo';
import Footer from './components/footer';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import backgroundImage from './images/img1.jpg'; // Adjust the path to your image

const apiKey = 'e282ff0abc8331d8ffae938a2b3b78ea'; // Replace with your OpenWeatherMap API key

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = response.data;
      if (data.cod === '404') {
        setError('City not found');
        setWeather(null);
        return;
      }
      setWeather(data);
      setError('');
    } catch (error) {
      setError('Error fetching data');
    }
  };

  // Inline styles for background
  const appStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh', // Full height of the viewport
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <div className="container-fluid p-0" style={appStyles}>
      {/* Header */}
      <Header />

      {/* Main Section */}
      <main className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-6">
            {/* SearchBar */}
            <SearchBar fetchWeather={fetchWeather} />

            {/* Error Message */}
            {error && <div className="alert alert-danger">{error}</div>}

            {/* WeatherInfo */}
            <WeatherInfo weather={weather} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
