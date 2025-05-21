<<<<<<< Updated upstream
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'; // Importa Redirect
import {
    IonApp,
    IonRouterOutlet,
    setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
=======
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { IonApp, setupIonicReact } from '@ionic/react';

>>>>>>> Stashed changes
import SplashScreen from './components/Splashscreen/SplashScreen';
import LoginPage from './components/Login/Login';
import Register from './components/Register/Register';
import Main from './components/Main/Main';
<<<<<<< Updated upstream
=======
import TipsAhorro from './components/Tips/TipsAhorro';

>>>>>>> Stashed changes
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
import Gastos from './components/Gastos/Gastos';

setupIonicReact();

const App: React.FC = () => {
    const [showSplash, setShowSplash] = useState(true);

    const handleSplashTimeout = () => {
        setShowSplash(false);
    };

<<<<<<< Updated upstream
    return (
        <IonApp>
            {showSplash ? (
                <SplashScreen onTimeout={handleSplashTimeout} />
            ) : (
                <Router>
                    <IonReactRouter>
                        <IonRouterOutlet id="main">
                            <Switch>
                                <Route exact path="/" component={LoginPage} /> 
                                <Route path="/login" component={LoginPage} /> 
                                <Route path="/register" component={Register} />
                                <Route path="/main" component={Main} />
                                <Route path="/gasto" component={Gastos} />
                                <Route path="*" render={() => <Redirect to="/" />} /> 
                            </Switch>
                        </IonRouterOutlet>
                    </IonReactRouter>
                </Router>
            )}
        </IonApp>
    );
=======
  return (
    <IonApp>
      {showSplash ? (
        <SplashScreen onTimeout={handleSplashTimeout} />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/main" element={<Main />} />
            <Route path="/tips" element={<TipsAhorro />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      )}
    </IonApp>
  );
>>>>>>> Stashed changes
};

export default App;