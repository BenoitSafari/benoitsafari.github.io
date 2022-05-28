import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const rootElement = document.querySelector('#root');
if (!rootElement) throw new Error('Cannot find \'#root\' element');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>
      <App/>
    </Router>
  </React.StrictMode>
);