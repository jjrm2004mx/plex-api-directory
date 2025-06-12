import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n'; // Importamos valores para i18n  en etiquetas HTML
import './index.css'; // Aquí se importa el CSS global
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);