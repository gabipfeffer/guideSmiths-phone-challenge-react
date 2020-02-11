import axios from 'axios';

import {
  GET_PHONES_PENDING,
  GET_PHONES_SUCCESS,
  GET_PHONES_FAILED,
  // PHONE_ID_PENDING,
  // PHONE_ID_SUCCESS,
  // PHONE_ID_FAILED
} from './constants';

const baseURL = 'http://localhost:3005/phones';

// const buildUrl = id => `${baseURL}/${id}`;

export const requestPhones = () => dispatch => {
  dispatch({ type: GET_PHONES_PENDING });
  const url = baseURL;
  axios
    .get(url)
    .then(response => response)
    .then(data => dispatch({ type: GET_PHONES_SUCCESS, payload: data }))
    .catch(err => dispatch({ type: GET_PHONES_FAILED, payload: err }));
};

// export const requestIdPhone = () => dispatch => {
//   dispatch({ type: PHONE_ID_PENDING });
//   const url = buildUrl(id);

//   axios
//     .get(url)
//     .then(response => response)
//     .then(data => dispatch({ type: PHONE_ID_SUCCESS, payload: data }))
//     .catch(err => dispatch({ type: PHONE_ID_FAILED, payload: err }));
// };
