import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { LangProvider } from '@hooks/useLang';
import App from './App';

const appRootElement = document.querySelector('#root');
if (!appRootElement) throw new Error('Cannot find \'#root\' element');
const root = createRoot(appRootElement);

root.render(
  <LangProvider>
    <Router>
      <App/>
    </Router>
  </LangProvider>
);