import React, { useState } from 'react';
<<<<<<< Updated upstream
import {
    IonPage,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonIcon,
    IonRouterLink,
    useIonLoading,
    useIonToast
} from '@ionic/react';
import { eyeOffOutline, eyeOutline, logoGoogle } from 'ionicons/icons';
import logo from '../img/Logo.png';
import './Login.css';
import { useHistory } from 'react-router-dom';
=======
import { IonPage, IonContent, IonInput, IonButton, IonIcon, IonRouterLink, useIonLoading, useIonToast } from '@ionic/react';
import { eyeOffOutline, eyeOutline, logoGoogle } from 'ionicons/icons';
import logo from '../img/Logo.png';
import './Login.css';
import { useNavigate } from 'react-router-dom';
>>>>>>> Stashed changes

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
<<<<<<< Updated upstream
    const history = useHistory();
    const [presentLoading, dismissLoading] = useIonLoading();
    const [presentToast] = useIonToast();
=======
    const [presentLoading, dismissLoading] = useIonLoading();
    const [presentToast] = useIonToast();
    const navigate = useNavigate(); 
>>>>>>> Stashed changes

    const handleLogin = async () => {
        presentLoading({
            message: 'Iniciando sesión...',
        });

        try {
<<<<<<< Updated upstream
            const response = await fetch('http://localhost:8080/api/auth/login', { // ⚠️ URL completa con el puerto
=======
            const response = await fetch('http://localhost:8080/api/auth/login', {
>>>>>>> Stashed changes
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            dismissLoading();

            if (response.ok) {
                const data = await response.json();
                console.log('Login exitoso:', data);
                presentToast({
                    message: data.message || 'Inicio de sesión exitoso',
                    duration: 2000,
                    position: 'top',
                    color: 'success',
                });
<<<<<<< Updated upstream
                history.push('../Main/Main.tsx'); // Redirige en caso de éxito
=======
                navigate('/main');
>>>>>>> Stashed changes
            } else {
                const errorData = await response.json();
                console.error('Error en el login:', errorData);
                presentToast({
                    message: errorData.message || 'Error al iniciar sesión',
                    duration: 3000,
                    position: 'top',
                    color: 'danger',
                });
            }
        } catch (error) {
            dismissLoading();
            console.error('Error de conexión:', error);
            presentToast({
                message: 'Error al conectar con el servidor',
                duration: 3000,
                position: 'top',
                color: 'danger',
            });
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleGoogleSignIn = () => {
        console.log('Google login');
<<<<<<< Updated upstream
        history.push('/'); 
=======
        navigate('/');
>>>>>>> Stashed changes
    };

    return (
        <IonPage>
            <IonContent fullscreen className="login-content">
                <div className="login-container">
                    <div className="logo-section">
                        <img src={logo} alt="Logo Springters" className="springters-logo" />
                        <h1 className="springters-text">SpringterCash</h1>
                    </div>

                    <div className="login-form-section">
                        <div className="form-container">
                            <h2>Bienvenido!!</h2>
<<<<<<< Updated upstream
                            <br></br>
=======
                            <br />
>>>>>>> Stashed changes
                            <div className="form-group">
                                <label htmlFor="username">Ingrese su nombre de usuario</label>
                                <IonInput
                                    id="username"
                                    type="text"
                                    value={username}
                                    onIonChange={(e) => setUsername(e.detail.value!)}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Ingrese su contraseña</label>
                                <IonInput
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onIonChange={(e) => setPassword(e.detail.value!)}
                                />
                                <IonIcon
                                    slot="end"
                                    icon={showPassword ? eyeOutline : eyeOffOutline}
                                    onClick={togglePasswordVisibility}
                                    style={{ cursor: 'pointer' }}
                                />
                            </div>

                            <IonButton expand="block" onClick={handleLogin} className="login-button">
                                Ingresar
                            </IonButton>

                            <IonButton expand="block" onClick={handleGoogleSignIn} className="google-login-button">
                                <IonIcon icon={logoGoogle} slot="start" />
                                Ingresar con Google
                            </IonButton>

                            <p className="signup-link">
                                ¿No tienes una cuenta? <IonRouterLink routerLink="/register">Regístrate</IonRouterLink>
                            </p>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Login;