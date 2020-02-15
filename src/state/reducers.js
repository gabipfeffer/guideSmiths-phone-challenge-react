import {
  GET_PHONES_PENDING,
  GET_PHONES_SUCCESS,
  GET_PHONES_FAILED,
  SET_SEARCHFIELD,
  GET_PHONE_ID_PENDING,
  GET_PHONE_ID_SUCCESS,
  GET_PHONE_ID_FAILED
} from './constants';

const initialSateSearchField = {
  searchField: ''
};

// reducer to set searchfield
export const setSearchField = (state = initialSateSearchField, action = {}) => {
  switch (action.type) {
    case SET_SEARCHFIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};

const initialStatePhoneList = {
  list: [],
  isPending: true
};

// reducer to request all phones
export const requestPhones = (state = initialStatePhoneList, action = {}) => {
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

const initialStatePhoneId = {
  phone: {},
  phonePending: true
};

// reducer to set single phone by ID
export const requestPhoneId = (state = initialStatePhoneId, action = {}) => {
  switch (action.type) {
    case GET_PHONE_ID_PENDING:
      return Object.assign({}, state, { phonePending: true });
    case GET_PHONE_ID_SUCCESS:
      return Object.assign({}, state, {
        phone: action.payload,
        phonePending: false
      });
    case GET_PHONE_ID_FAILED:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
};
