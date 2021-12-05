import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/reducers';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
