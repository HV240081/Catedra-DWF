import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton } from '@ionic/react';
import './Header.css';
import logo from '../img/Logo.png';

interface HeaderProps {
  username: string;
}

const Header: React.FC<HeaderProps> = ({ username }) => {
  return (
    <IonHeader>
      <IonToolbar className="custom-header">
        <div className="left-section">
          <img src={logo} alt="Logo" className="logo" />
          <IonTitle className="app-name">Ahorro</IonTitle>
        </div>
        <div className="right-section">
          <span className="username">{username}</span>
          <IonButtons slot="end">
            <IonMenuButton />
          </IonButtons>
        </div>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;