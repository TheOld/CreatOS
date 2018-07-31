
/* ----------  External Libraries  ---------- */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store/store';


/* ----------  Polyfill  ---------- */
import 'babel-polyfill';
import 'nodelist-foreach-polyfill';

/* ----------  Components  ---------- */
import App from './components/Container/App';

import 'normalize.css';

require('es6-promise/auto');

const root = document.querySelector('#app');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  root
)
