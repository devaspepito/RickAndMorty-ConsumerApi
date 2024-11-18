import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App'; // Asegúrate de que esta ruta sea correcta
import './styles/App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
