import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/index.css';
import App from './views/App';
import { Provider } from 'react-redux';
import stores from './stores/stores';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={stores}>
    <App />
  </Provider>
);