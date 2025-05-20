import React, { useEffect, useState } from 'react';
import {
    IonContent,
    IonPage,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonText,
    IonItem,
    IonLabel,
    IonInput,
} from '@ionic/react';
import { addCircle, trendingUp, flame, atOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom'; 
import "./Main.css";

const gastosPorCategoria = {
    Alimentación: 200,
    Transporte: 150,
    Entretenimiento: 100,
    Ahorro: 250,
};

const ingresos = 1000;
const gastos = Object.values(gastosPorCategoria).reduce((a, b) => a + b, 0);
const saldo = ingresos - gastos;
const metaAhorroCantidadSimulada = 500; // Ejemplo de cuánto se quiere ahorrar

const consejos = [
    "Divide tus gastos fijos y variables.",
    "Ahorra al menos el 10% de tu ingreso.",
    "Evita deudas con intereses altos.",
    "Registra tus gastos diariamente.",
];
const consejoAleatorio = () => consejos[Math.floor(Math.random() * consejos.length)];

const calcularRachaAhorro = () => {
    return 1; 
};

const Main: React.FC = () => {
    const [rachaAhorro, setRachaAhorro] = useState(0);
    const [consejo, setConsejo] = useState('');
    const [metaAhorroDias, setMetaAhorroDias] = useState<number | null>(null);
    const [metaAhorroCantidad, setMetaAhorroCantidad] = useState<number | null>(null);
    const history = useHistory(); 

    useEffect(() => {
        setRachaAhorro(calcularRachaAhorro());
        setConsejo(consejoAleatorio());
    }, []);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Springtercash</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">

                <IonGrid>
                    <IonRow>
                        <IonCol size="12" sizeMd="6">
                            <IonCard color="success">
                                <IonCardHeader>
                                    <IonCardTitle>💰 Total Ingresos</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <h1>${ingresos.toFixed(2)}</h1>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol size="12" sizeMd="6">
                            <IonCard color="danger">
                                <IonCardHeader>
                                    <IonCardTitle>💸 Total Gastos</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <h1>${gastos.toFixed(2)}</h1>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size="12">
                            <IonCard color="primary">
                                <IonCardHeader>
                                    <IonCardTitle>🎯 Meta de Ahorro</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <h1>${metaAhorroCantidadSimulada.toFixed(2)}</h1>
                                    <IonText color="medium">Cantidad que se quiere ahorrar</IonText>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>

                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>⚙️ Establecer Meta de Ahorro</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonItem>
                            <IonLabel position="floating">¿En cuántos días?</IonLabel>
                            <IonInput
                                type="number"
                                value={metaAhorroDias !== null ? metaAhorroDias.toString() : ''}
                                onIonChange={(e) => setMetaAhorroDias(e.detail.value ? parseInt(e.detail.value, 10) : null)}
                            />
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">¿Cuánto quieres ahorrar?</IonLabel>
                            <IonInput
                                type="number"
                                value={metaAhorroCantidad !== null ? metaAhorroCantidad.toString() : ''}
                                onIonChange={(e) => setMetaAhorroCantidad(e.detail.value ? parseFloat(e.detail.value) : null)}
                            />
                        </IonItem>
                        <IonButton expand="full" onClick={() => {
                            console.log('Meta de ahorro establecida:', metaAhorroDias, metaAhorroCantidad);
                        }}>
                            Guardar Meta
                        </IonButton>
                    </IonCardContent>
                </IonCard>

                {/* Racha de ahorro */}
                <IonCard color="warning">
                    <IonCardHeader>
                        <IonCardTitle>
                            <IonIcon icon={flame} /> Racha de Ahorro
                        </IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        🔥 ¡Llevas <strong>{rachaAhorro}</strong> días seguidos ahorrando!
                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>📘 Consejo del Día</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonText>{consejo}</IonText>
                    </IonCardContent>
                </IonCard>

                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonButton expand="block" color="danger" onClick={() => history.push('/gastos')}>
                                <IonIcon slot="start" icon={addCircle} />
                                Ingresar Gasto
                            </IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton expand="block" color="tertiary" onClick={() => history.push('/ingresos')}>
                                <IonIcon slot="start" icon={trendingUp} />
                                Registrar Ingreso
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>

            </IonContent>
        </IonPage>
    );
};

export default Main;