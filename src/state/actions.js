import axios from 'axios';

import { GET_PHONE_BY_ID } from './constants';
import { GET_PHONE_LIST } from './constants';

const baseURL = 'http://localhost:3005/phones';

const buildUrl = id => `${baseURL}/${id}`;

export async function getPhoneList() {
  const { data } = await axios.get(baseURL);
  return {
    type: GET_PHONE_LIST,
    payload: data
  };
}

export async function getPhoneById(id) {
  const url = buildUrl(id);

  const { data } = await axios.get(url);
  return {
    type: GET_PHONE_BY_ID,
    payload: data
  };
}
