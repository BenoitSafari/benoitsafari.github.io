import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ModalProvider } from './hooks/useModal';
import App from './App';

const appRootElement = document.querySelector('#app-root');
if (!appRootElement) throw new Error('Cannot find \'#app-root\' element');
const root = createRoot(appRootElement);

root.render(
  <React.StrictMode>
    <ModalProvider>
      <Router>
        <App/>
      </Router>
    </ModalProvider>
  </React.StrictMode>
);