import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import aia from './plugins/aia'
import * as serviceWorker from './serviceWorker';
import App from './App';
import store from './store';

const header = {
  headers: {
    'x-api-key': process.env.REACT_APP_AIA_API_KEY,
    Accept: 'application/vnd.hal+json',
    'x-auth-username': process.env.REACT_APP_AIA_AUTH_USERNAME,
    'Content-Type': 'application/json'
  }
}

aia.setHeader(header)

ReactDOM.render((
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
), document.getElementById('root'));

serviceWorker.unregister();
