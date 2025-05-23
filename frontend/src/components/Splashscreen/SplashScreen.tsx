import React, { useState, useEffect } from 'react';
import './SplashScreen.css';
import logo from "../img/Logo.png" // Importa la imagen desde la ubicación correcta

interface SplashScreenProps {
  onTimeout: () => void;
}
//Parte que se define, llama para indicar que el splash screen ha terminado en 5 segundos, aparte de limpiar el timeout si el componente se desmont
const SplashScreen: React.FC<SplashScreenProps> = ({ onTimeout }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onTimeout();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onTimeout]);

  return isVisible ? (
    <div className="splash-screen">
      <img src={logo} alt="Logo de la App" className="app-logo" />
      <h1>Springtercash</h1>
      <div className="loading-indicator"></div>
    </div>
  ) : null;
};

export default SplashScreen;