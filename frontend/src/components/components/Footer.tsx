import React from 'react';
import './Footer.css';
import logo from '../img/Logo.png'; 

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="Logo" className="footer-logo" />
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">🔵</a>
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">🟢</a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">🔴</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">🟣</a>
        </div>
      </div>
      <div className="footer-rights">Derechos de empresa</div>
    </footer>
  );
};

export default Footer;