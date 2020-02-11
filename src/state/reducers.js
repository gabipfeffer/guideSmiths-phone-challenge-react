import { GET_PHONE_BY_ID } from './constants';
import { GET_PHONE_LIST } from './constants';

const initialState = {
  list: []
};

export const handlePhones = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_PHONE_BY_ID:
      return { ...state, list: action.payload };
    case GET_PHONE_LIST:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};
