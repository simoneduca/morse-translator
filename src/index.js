import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory, Router, Route } from 'react-router';
import { Provider } from 'react-redux';

import App from './components/App';
import configureStore from './store';

import Styles from './styles/main.styl'; // eslint-disable-line no-unused-vars

const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App} />
      <Route path="/message/:message_id" component={App} />
    </Router>
  </Provider>),
  document.getElementById('root'),
);
