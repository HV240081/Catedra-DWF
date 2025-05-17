import React, { useState } from 'react';
import {  IonContent,  IonPage,  IonHeader,  IonToolbar,  IonTitle,  IonItem,  IonLabel,  IonInput, IonButton, IonIcon} from '@ionic/react';
import { eyeOffOutline, eyeOutline } from 'ionicons/icons';
import './Register.css';
import fondo from "../img/fondo.png";
import logo from "../img/Logo.png";
import { useHistory } from 'react-router-dom';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();

  const handleLogin = () => {
    console.log('Iniciar sesión con:', username, password);
    // Simulación de guardado (localStorage por ahora)
    const userData = { username, mail, password };
    localStorage.setItem('user', JSON.stringify(userData));

    console.log('Usuario registrado:', userData);

    // Redirigir al login
    history.push('/');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
          <p>Ingrese  un nombre de usuario</p>
          <IonItem>
            <IonLabel position="floating">Username</IonLabel>
            <IonInput
              type="text"
              value={username}
              onIonChange={(e) => setUsername(e.detail.value!)}
            />
          </IonItem>
          <p>Ingrese su correo electrónico</p>
          <IonItem>
            <IonLabel position="floating">Username</IonLabel>
            <IonInput
              type="email"
              value={mail}
              onIonChange={(e) => setMail(e.detail.value!)} //El setMail es para que el correo se guarde mejor y correcto. Por eso lo cambie en las pruebas que estaba haciendo :) 
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
            ¿Ya tienes una cuenta?
            <IonButton fill="clear" onClick={() => history.push('/')}>Inicia sesión</IonButton>
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register;