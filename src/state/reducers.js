import {
  GET_PHONES_PENDING,
  GET_PHONES_SUCCESS,
  GET_PHONES_FAILED
} from './constants';

const initialState = {
  list: [],
  isPending: true
};

const requestPhones = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_PHONES_PENDING:
      return Object.assign({}, state, { isPending: true });
    case GET_PHONES_SUCCESS:
      return Object.assign({}, state, {
        list: action.payload,
        isPending: false
      });
    case GET_PHONES_FAILED:
      return Object.assign({}, state, {
        error: action.payload
      });
    default:
      return state;
  }
};

export default requestPhones;
