import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import requestPhones from './state/reducers';
import App from './containers/App/App';

import './index.scss';

const logger = createLogger();
const rootReducer = combineReducers({ requestPhones });
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

