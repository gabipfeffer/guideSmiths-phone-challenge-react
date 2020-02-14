import {
  GET_PHONES_PENDING,
  GET_PHONES_SUCCESS,
  GET_PHONES_FAILED,
  SET_SEARCHFIELD
} from './constants';

const initialSateSearchField = {
  searchField: ''
};

export const setSearchField = (state = initialSateSearchField, action = {}) => {
  switch (action.type) {
    case SET_SEARCHFIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};

const initialState = {
  list: [],
  isPending: true
};

export const requestPhones = (state = initialState, action = {}) => {
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
