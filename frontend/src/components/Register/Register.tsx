import React, { useState } from 'react';
import {
    IonPage,
    IonContent,
    IonInput,
    IonButton,
    IonIcon,
    IonRouterLink,
    useIonLoading,
    useIonToast
} from '@ionic/react';
import { eyeOffOutline, eyeOutline, logoGoogle } from 'ionicons/icons';
import logo from '../img/Logo.png';
import './Register.css';
import { useNavigate } from 'react-router-dom'; // ✅ reemplaza useHistory

const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [presentLoading, dismissLoading] = useIonLoading();
    const [presentToast] = useIonToast();
    const navigate = useNavigate(); // ✅ nuevo hook

    const handleRegister = async () => {
        presentLoading({
            message: 'Creando cuenta...',
        });

        try {
            const response = await fetch('http://localhost:8080/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            dismissLoading();

            if (response.ok) {
                const data = await response.json();
                console.log('Registro exitoso:', data);
                presentToast({
                    message: data.message || 'Cuenta creada exitosamente',
                    duration: 2000,
                    position: 'top',
                    color: 'success',
                });
                navigate('/login'); // ✅ cambio aquí
            } else {
                const errorData = await response.json();
                console.error('Error en el registro:', errorData);
                presentToast({
                    message: errorData.message || 'Error al crear la cuenta',
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
                            <h2>Register</h2>
                            <br />
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
                                <label htmlFor="email">Ingrese su correo electrónico</label>
                                <IonInput
                                    id="email"
                                    type="email"
                                    value={email}
                                    onIonChange={(e) => setEmail(e.detail.value!)}
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

                            <IonButton expand="block" onClick={handleRegister} className="login-button">
                                Crear Cuenta
                            </IonButton>

                            <p className="signup-link">
                                ¿Ya tienes una cuenta? <IonRouterLink routerLink="/login">Ingresa aquí</IonRouterLink>
                            </p>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Register;
