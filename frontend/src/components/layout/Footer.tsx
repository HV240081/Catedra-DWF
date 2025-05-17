import React from 'react';
import './Footer.css';
import logo from '../img/Logo.png';
import { logoWhatsapp, logoFacebook, logoInstagram, logoYoutube } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

const Footer: React.FC = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-top">
        <div className="footer-left">
          <img src={logo} alt="Logo" className="footer-logo" />
        </div>
        <div className="footer-right">
          <IonIcon icon={logoWhatsapp} className="social-icon" />
          <IonIcon icon={logoFacebook} className="social-icon" />
          <IonIcon icon={logoInstagram} className="social-icon" />
          <IonIcon icon={logoYoutube} className="social-icon" />
        </div>
      </div>
      <div className="footer-bottom">
        <p>Derechos reservados a la empresa</p>
      </div>
    </footer>
  );
};

export default Footer;