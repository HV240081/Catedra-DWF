import React from 'react';
import './Footer.css';
import logo from '../img/Logo.png';
import { logoFacebook, logoWhatsapp, logoYoutube, logoInstagram } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="Logo" className="footer-logo" />
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
            <IonIcon icon={logoFacebook} slot="start" />
          
          </a>
          <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
            <IonIcon icon={logoWhatsapp} slot="start" /> 
            
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
            <IonIcon icon={logoYoutube} slot="start" />
            
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
            <IonIcon icon={logoInstagram} slot="start" />
          
          </a>
        </div>
      </div>
      <div className="footer-rights">Derechos de empresa</div>
    </footer>
  );
};

export default Footer;