import React, { useState } from 'react';
import { IonPage, IonContent, IonInput, IonButton } from '@ionic/react';
import './Gastos.css';
import { useHistory } from 'react-router-dom'; // Importa useHistory

const GastosFijos: React.FC = () => {
    const [valorGasto, setValorGasto] = useState('');
    const [otroGasto, setOtroGasto] = useState('');
    const history = useHistory(); // Inicializa useHistory

    const handleIngresarGastoFijo = () => {
        console.log('Gasto Fijo:', valorGasto, otroGasto || 'Agua'); // Simula el ingreso
        // Aquí guardarías el gasto fijo y probablemente navegarías de vuelta al Main
        history.push('/'); // Navega de vuelta al Main
    };

    return (
        <IonPage>
            <IonContent className="gastos-container">
                <h2 className="gastos-titulo">Gastos Fijos</h2>

                <div className="gastos-total">
                    <label htmlFor="valor-gasto">Ingrese el valor del gasto fijo:</label>
                    <IonInput
                        id="valor-gasto"
                        type="number"
                        placeholder="$0.00"
                        value={valorGasto}
                        onIonChange={(e) => setValorGasto(e.detail.value!)}
                    />
                </div>

                <h3 className="gastos-subtitulo">Seleccione el tipo de gasto fijo:</h3>

                <div className="gastos-botones">
                    <IonButton expand="block" onClick={() => console.log('Seleccionó Agua')}>Agua</IonButton>
                    <IonButton expand="block" onClick={() => console.log('Seleccionó Luz')}>Luz</IonButton>
                    <IonButton expand="block" onClick={() => console.log('Seleccionó Internet')}>Internet</IonButton>
                    <IonButton expand="block" onClick={() => console.log('Seleccionó Renta')}>Renta</IonButton>
                    <IonButton expand="block" onClick={() => console.log('Seleccionó Servicios')}>Servicios</IonButton>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <IonInput
                            placeholder="Otros..."
                            value={otroGasto}
                            onIonChange={(e) => setOtroGasto(e.detail.value!)}
                        />
                    </div>
                </div>

                <IonButton expand="block" className="gastos-regresar" style={{ marginTop: '32px' }} onClick={handleIngresarGastoFijo}>
                    Ingresar
                </IonButton>
                <IonButton fill="outline" onClick={() => history.goBack()} className="gastos-regresar" style={{ marginTop: '16px' }}>
                    Regresar a Gastos
                </IonButton>
            </IonContent>
        </IonPage>
    );
};

export default GastosFijos;