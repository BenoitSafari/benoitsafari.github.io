import React from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyle from 'components/GlobalStyle';
import App from './App';

const appRootElement = document.querySelector('#app-root');
if (!appRootElement) throw new Error('Cannot find \'#app-root\' element');
const root = createRoot(appRootElement);

root.render(
  <>
    <GlobalStyle/>
    <App/>
  </>
);