import React from 'react';
import ReactDOM from 'react-dom/client';

// Importando Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

// Importando App.css
import './App.css';

// Importando Componente App para Renderizar
import App from './App';
const Root = ReactDOM.createRoot(document.getElementById('root'));
/*-------------------------------------------------------------------------------------------------------------------------*/

setInterval(
  () => {
    Root.render(<App />)
    //console.log(reloj);
  },
  1000
);

