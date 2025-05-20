import React, { useState } from 'react';
import { IonPage, IonContent, IonInput, IonButton } from '@ionic/react';
//import Header from '../layout/Header';
//import Footer from '../layout/Footer';
import './Gastos.css';
import { useHistory } from 'react-router-dom';

const Gastos: React.FC = () => {
  const [total, setTotal] = useState('');
  const history = useHistory();

  return (
    <IonPage>
      <IonContent className="gastos-container">
        <h2 className="gastos-titulo">Gastos</h2>

        <div className="gastos-total">
          <label htmlFor="total-input">Ingrese el total: </label>
          <IonInput
            id="total-input"
            type="number"
            placeholder="$ Total"
            value={total}
            onIonChange={(e) => setTotal(e.detail.value!)}
          />
        </div>

        <h3 className="gastos-subtitulo">Clasificar costos:</h3>

        <div className="gastos-botones">
          <IonButton expand="block" onClick={() => history.push('/gastos/fijos')}>
            Fijos
          </IonButton>
          <IonButton expand="block" onClick={() => history.push('/gastos/variables')}>
            Variables
          </IonButton>
        </div>

        <IonButton fill="outline" onClick={() => history.goBack()} className="gastos-regresar">
          Regresar
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Gastos;