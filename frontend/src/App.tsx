import React, { useState, useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import SplashScreen from '../src/components/Splashscreen/SplashScreen'; // Asegúrate de que la ruta sea correcta
import LoginPage from '../src/components/Login/Login'; // Importa el componente LoginPage
import RegisterPage from '../src/components/Register/Register';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashTimeout = () => {
    setShowSplash(false);
  };

  return (
    <IonApp>
      {showSplash ? (
        <SplashScreen onTimeout={handleSplashTimeout} />
      ) : (
        <IonReactRouter>
          <IonRouterOutlet id="main">
            <Route exact path="/">
              <LoginPage /> {/* LoginPage como la ruta principal */}
            </Route>
            {/* Si aún necesitas las otras pestañas en otras rutas, defínelas aquí */}
            {/* <Route path="/tabs/tab2" component={Tab2} />
            <Route path="/tabs/tab3" component={Tab3} />
            <Route path="/tabs" render={() => <Redirect to="/tabs/tab1" />} />
            <Route path="/tabs/tab1" component={Tab1} /> */}
              <Route exact path="/register">
                <RegisterPage />
              </Route>
          </IonRouterOutlet>
          {/* Si ya no necesitas la barra de pestañas inicialmente, puedes comentarla o eliminarla */}
          {/* <IonTabs>
            <IonTabBar slot="bottom">
              <IonTabButton tab="tab1" href="/tabs/tab1">
                <IonIcon aria-hidden="true" icon={triangle} />
                <IonLabel>Iniciar Sesión</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab2" href="/tabs/tab2">
                <IonIcon aria-hidden="true" icon={ellipse} />
                <IonLabel>Tab 2</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab3" href="/tabs/tab3">
                <IonIcon aria-hidden="true" icon={square} />
                <IonLabel>Tab 3</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs> */}
        </IonReactRouter>
      )}
    </IonApp>
  );
};

export default App;