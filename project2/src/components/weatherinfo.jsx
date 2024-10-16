import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import { FaTemperatureHigh } from "react-icons/fa";
//import { WiHumidity } from "react-icons/wi";
import AcUnitIcon from '@mui/icons-material/AcUnit';

function WeatherInfo({ weather }) {
  if (!weather) {
    return <p style={styles.loadingText}>Loading weather data...</p>; 
  }

 
  const {
    name,
    main: { temp,  },
    // wind: { speed },
    weather: [{ description, icon }],
  } = weather;

  
  const temperatureColor = temp > 25 ? 'red' : 'blue';

  return (
    <div style={styles.card}>
      <div style={styles.cardBody}>
        <h3 style={styles.cardTitle}>{name}</h3>

        <div style={styles.weatherDetails}>
          <p style={{ ...styles.cardText, color: temperatureColor }}>
            
            <FaTemperatureHigh />Temperature: {temp}°C
          </p>
          
          {/* <p style={{ ...styles.cardText, color: '#007bff' }}>
            <i className="bi bi-droplet-fill"></i> Humidity: {humidity}%
          </p>
          <p style={{ ...styles.cardText, color: '#17a2b8' }}>
            <i className="bi bi-wind"></i> Wind Speed: {speed} m/s
          </p> */}
          <p style={styles.cardText}>
            <i className={`wi wi-owm-${icon}`}></i> 
            <AcUnitIcon/>
                Weather: {description}
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: 'linear-gradient(to right, #e0f7fa, #fff)',
    borderRadius: '10px',
    padding: '20px',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    margin: '20px auto',
    width: '80%',
    maxWidth: '500px',
  },
  cardBody: {
    textAlign: 'center',
  },
  cardTitle: {
    fontSize: '1.5rem',
    marginBottom: '15px',
  },
  weatherDetails: {
    marginTop: '20px',
  },
  cardText: {
    fontSize: '1.2rem',
    margin: '10px 0',
    fontWeight: 'bold',
  },
  loadingText: {
    textAlign: 'center',
    color: '#888',
    fontStyle: 'italic',
  },
};

export default WeatherInfo;
