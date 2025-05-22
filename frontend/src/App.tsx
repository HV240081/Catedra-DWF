import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { IonApp, setupIonicReact } from '@ionic/react';

import SplashScreen from './components/Splashscreen/SplashScreen';
import LoginPage from './components/Login/Login';
import Register from './components/Register/Register';
import TipsAhorro from './components/Tips/TipsAhorro';

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
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/tips" element={<TipsAhorro />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      )}
    </IonApp>
  );
};

export default App;