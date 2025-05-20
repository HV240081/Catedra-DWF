// src/components/Ingresos.tsx
import React, { useState } from 'react';
import { IonPage, IonContent, IonInput, IonButton, IonGrid, IonRow, IonCol, IonLabel, IonText } from '@ionic/react';
import './Ingresos.css';
import { useHistory } from 'react-router-dom'; // Importa useHistory

const Ingresos: React.FC = () => {
    const [totalIngreso, setTotalIngreso] = useState('');
    const [otrosIngreso, setOtrosIngreso] = useState('');
    const [ingresosSeleccionados, setIngresosSeleccionados] = useState<string[]>([]);
    const history = useHistory(); // Inicializa useHistory

    const tiposIngreso = ['Mesada', 'Pensión', 'Remesas', 'Subsidios', 'Salario', 'Cheques'];

    const toggleIngreso = (tipo: string) => {
        setIngresosSeleccionados((prev) =>
            prev.includes(tipo)
                ? prev.filter((item) => item !== tipo)
                : [...prev, tipo]
        );
    };

    const handleIngresar = () => {
        console.log('Total:', totalIngreso);
        console.log('Tipos:', ingresosSeleccionados);
        console.log('Otros:', otrosIngreso);
        // Aquí puedes enviar los datos a donde los necesites
        history.push('/'); // Navega de vuelta al Main
    };

    return (
        <IonPage>
            <IonContent className="ion-padding">
                <h2 className="titulo">Ingresos</h2>

                <div className="campo-total">
                    <IonLabel className="label-total">Ingrese su total ingreso:</IonLabel>
                    <IonInput
                        type="number"
                        placeholder="$ total"
                        value={totalIngreso}
                        onIonChange={(e) => setTotalIngreso(e.detail.value!)}
                        className="input-total"
                    />
                </div>

                <IonText className="subtitulo">Clasificar Ingreso</IonText>

                <div className="seleccion-ingresos">
                    <IonLabel>Seleccione todos sus tipos de ingresos:</IonLabel>
                    <IonGrid>
                        <IonRow>
                            {tiposIngreso.slice(0, 4).map((tipo, index) => (
                                <IonCol size="3" key={index}>
                                    <IonButton
                                        expand="block"
                                        fill={ingresosSeleccionados.includes(tipo) ? 'solid' : 'outline'}
                                        onClick={() => toggleIngreso(tipo)}
                                    >
                                        {tipo}
                                    </IonButton>
                                </IonCol>
                            ))}
                        </IonRow>
                        <IonRow>
                            {tiposIngreso.slice(4, 6).map((tipo, index) => (
                                <IonCol size="3" key={index + 4}>
                                    <IonButton
                                        expand="block"
                                        fill={ingresosSeleccionados.includes(tipo) ? 'solid' : 'outline'}
                                        onClick={() => toggleIngreso(tipo)}
                                    >
                                        {tipo}
                                    </IonButton>
                                </IonCol>
                            ))}
                            <IonCol size="6">
                                <IonInput
                                    placeholder="Otros ingresos"
                                    value={otrosIngreso}
                                    onIonChange={(e) => setOtrosIngreso(e.detail.value!)}
                                />
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </div>

                <div className="boton-ingresar">
                    <IonButton expand="block" onClick={handleIngresar}>
                        Ingresar
                    </IonButton>
                </div>

                <IonButton fill="outline" onClick={() => history.push('/')} className="boton-regresar">
                    Regresar al Inicio
                </IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Ingresos;