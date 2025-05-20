import React from 'react';
import { IonPage, IonContent, IonButton } from '@ionic/react';
import './Organizacion.css';
import { useHistory } from 'react-router-dom';

const Organizacion: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonContent className="organizacion-content">
        <div className="organizacion-container">
          <h2>Organiza tus Finanzas</h2>
          <IonButton expand="block" onClick={() => history.push('/ingresos')}>
            Ir a Ingresos
          </IonButton>
          <IonButton expand="block" onClick={() => history.push('/gastos')}>
            Ir a Gastos
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Organizacion;