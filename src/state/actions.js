import axios from 'axios';

import {
  GET_PHONES_PENDING,
  GET_PHONES_SUCCESS,
  GET_PHONES_FAILED
} from './constants';

const baseURL = 'http://localhost:3005/phones';

export const requestPhones = () => dispatch => {
  dispatch({ type: GET_PHONES_PENDING })
  const url = baseURL;
  axios
    .get(url)
    .then(response => response)
    .then(data => dispatch({ type: GET_PHONES_SUCCESS, payload: data }))
    .catch(err => dispatch({ type: GET_PHONES_FAILED, payload: err }));
};
