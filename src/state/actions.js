import axios from 'axios';

import {
  GET_PHONES_PENDING,
  GET_PHONES_SUCCESS,
  GET_PHONES_FAILED,
  SET_SEARCHFIELD,
  GET_PHONE_ID_PENDING,
  GET_PHONE_ID_SUCCESS,
  GET_PHONE_ID_FAILED,
  DELETE_PHONE_PENDING,
  DELETE_PHONE_SUCCESS,
  DELETE_PHONE_FAILED
} from './constants';

const baseURL = 'http://localhost:3005/phones';

const buildUrl = id => `${baseURL}/${id}`;

// request entire phone list
export const requestPhones = () => dispatch => {
  dispatch({ type: GET_PHONES_PENDING });
  const url = baseURL;
  axios
    .get(url)
    .then(response => response)
    .then(data => dispatch({ type: GET_PHONES_SUCCESS, payload: data.data }))
    .catch(err => dispatch({ type: GET_PHONES_FAILED, payload: err }));
};

// request phone by id
export const requestPhoneId = id => dispatch => {
  dispatch({ type: GET_PHONE_ID_PENDING });
  const url = buildUrl(id);
  axios
    .get(url)
    .then(response => response)
    .then(data =>
      dispatch({ type: GET_PHONE_ID_SUCCESS, payload: data.data[0] })
    )
    .catch(err => dispatch({ type: GET_PHONE_ID_FAILED, payload: err }));
};

// delete phone by id
export const deletePhoneId = id => dispatch => {
  dispatch({ type: DELETE_PHONE_PENDING });
  const url = buildUrl(id);
  axios
    .delete(url)
    .then(response => response)
    .then(data => {
      dispatch({ type: GET_PHONES_SUCCESS, payload: data.data });
      dispatch({ type: DELETE_PHONE_SUCCESS });
    })
    .catch(err => dispatch({ type: DELETE_PHONE_FAILED, payload: err }));
};

// set searchfield to filter phones
export const setSearchField = text => ({
  type: SET_SEARCHFIELD,
  payload: text
});
