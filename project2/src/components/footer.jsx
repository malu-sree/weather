import React from 'react';
import { FaCloudSun, FaHeart } from 'react-icons/fa'; 

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-4">
      <div className="container">
      
        <div className="mb-3">
          <FaCloudSun size={40} style={{ color: '#f0c674' }} />
        </div>

        <p className="mb-2">
          Powered by{' '}
          <a href="https://openweathermap.org/" className="text-warning text-decoration-none">
            OpenWeatherMap
          </a>
        </p>

        <p className="mb-0">
          &copy; 2024 Weather App | Developed with{' '}
          <FaHeart className="text-danger" /> by team
        </p>

        {/* Optional animation on hover */}
        <style jsx>{`
          footer {
            transition: background-color 0.5s ease;
          }
          footer:hover {
            background-color: #222;
          }
          a:hover {
            color: #ffcc00;
          }
        `}</style>
      </div>
    </footer>
  );
}

export default Footer;
