import React, { useState } from 'react';
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon
} from '@ionic/react';
import { eyeOffOutline, eyeOutline } from 'ionicons/icons';
import './Login.css';
import fondo from "../img/fondo.png";
import logo from "../img/Logo.png";
import { IonRouterLink } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();

  const handleLogin = () => {
    console.log('Iniciar sesión con:', username, password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const goToRegister = () => {
    history.push('/register');
  };
  

  return (
    <IonPage className="login-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bienvenido</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="login-content">
        <div className="background-container">
          <img src={fondo} alt="fondo" className="fondo" />
        </div>
        <div className="form-container">
        <img src={logo} alt="Logo de la App" className="app-logo" />
          <p>Ingrese su nombre de usuario</p>
          <IonItem>
            <IonLabel position="floating">Username</IonLabel>
            <IonInput
              type="text"
              value={username}
              onIonChange={(e) => setUsername(e.detail.value!)}
            />
          </IonItem>
          <p>Ingrese su contraseña</p>
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput
              type={showPassword ? 'text' : 'password'}
              value={password}
              onIonChange={(e) => setPassword(e.detail.value!)}
            />
            <IonIcon
              slot="end"
              onClick={togglePasswordVisibility}
              style={{ cursor: 'pointer' }}
            />
          </IonItem>
          <IonButton expand="block" onClick={handleLogin} className="login-button">
            Ingresar
          </IonButton>
          <p className="signup-link">
            No tienes una cuenta? <IonRouterLink routerLink="/register">Regístrate</IonRouterLink>
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;