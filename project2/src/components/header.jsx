import React from 'react';
import { TiWeatherPartlySunny } from "react-icons/ti";

function Header() {
  return (
    <header className="bg-primary text-white text-center p-5 position-relative" style={{ background: 'linear-gradient(to right, #6dd5fa, #2980b9)' }}>
    
      <h1 className="display-4 d-flex justify-content-center align-items-center">
        <TiWeatherPartlySunny 
          className="me-3"
          size={60} 
          style={{ animation: 'spin 5s infinite linear' }} 
        /> 
        Weather Now
      </h1>
      
     
      <p className="lead mb-4">Stay updated with real-time weather updates wherever you are</p>
      
     
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      
      `}</style>
    </header>
  );
}

export default Header;
