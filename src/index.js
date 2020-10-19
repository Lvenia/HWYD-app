import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';

import { Provider } from 'react-redux';

import rootReducer from './reducers/rootReducer';

import 'bootstrap/dist/css/bootstrap.min.css';

const composeEnhancers = typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);

const store = createStore(
  rootReducer,
  enhancer
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

