import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import "./scss/bootstrap.scss"
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import "./scss/checkbox.css"
// import reportWebVitals from './reportWebVitals';
library.add(fab, fas, far);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
