import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import { requestPhones, setSearchField } from './state/reducers';
import App from './containers/App/App';

import './index.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({ setSearchField, requestPhones });
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...[thunkMiddleware]))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
