import React from 'react';
import {
  IonMenu,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonMenuToggle
} from '@ionic/react';
import './MenuDrawer.css';

const MenuDrawer: React.FC = () => {
  return (
    <IonMenu contentId="main">
      <IonContent>
        <IonList>
          <IonMenuToggle autoHide={false}>
            <IonItem button routerLink="/nosotros">
              <IonLabel>Nosotros</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle autoHide={false}>
            <IonItem button routerLink="/configuracion">
              <IonLabel>Configuración</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle autoHide={false}>
            <IonItem button routerLink="/ayuda">
              <IonLabel>Ayuda</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle autoHide={false}>
            <IonItem button routerLink="/tips">
              <IonLabel>Tips de Ahorro</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle autoHide={false}>
            <IonItem button routerLink="/organizacion">
              <IonLabel>Organización</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle autoHide={false}>
            <IonItem button routerLink="/plan">
              <IonLabel>Plan de Ahorro</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle autoHide={false}>
            <IonItem button routerLink="/perfil">
              <IonLabel>Perfil</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default MenuDrawer;