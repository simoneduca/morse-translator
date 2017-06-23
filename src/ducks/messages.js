import { hashHistory } from 'react-router';
import alphabet from '../constants/alphabet';
import base from '../constants/base';

// Action Types
export const CLEAR_FIELD = 'CLEAR_FIELD';
export const FETCH_CURRENT = 'FETCH_CURRENT';
export const TRANSLATE_INTO_MORSE = 'TRANSLATE_INTO_MORSE';

// Reducer
const initialState = {
  morse: '',
  original: '',
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_FIELD:
      return Object.assign({}, initialState);
    case FETCH_CURRENT:
      return Object.assign({}, state, {
        morse: action.morse,
        original: action.original,
      });
    case TRANSLATE_INTO_MORSE:
      return Object.assign({}, state, {
        morse: action.morse,
        original: action.original,
      });
    default:
      return state;
  }
};

// Action Creators
const clearField = () => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_FIELD,
    });
    hashHistory.push('/');
  };
};

const fetchCurrent = (id) => {
  return (dispatch) => {
    base.fetch(`message/${id}`, {
      context: this,
    }).then((data) => {
      dispatch({
        type: FETCH_CURRENT,
        morse: data.morse,
        original: data.original,
      });
    }).catch((error) => {
      console.log(error);
    });
  };
};

const translate = (text) => {
  return (dispatch) => {
    const translation = text
      .split('')
      .map(item => alphabet[item.toLowerCase()] || ' ')
      .join(' ')
      .replace(/\s{2,}/g, ' / ');
    dispatch({
      type: TRANSLATE_INTO_MORSE,
      morse: translation,
      original: text,
    });
    base.push('message', {
      data: {
        morse: translation,
        original: text,
      },
    })
    .then((response) => {
      hashHistory.push(`/message/${response.path.o[1]}`);
    })
    .catch((error) => {
      console.log('error: ', error);
    });
  };
};

// Exports
export default messagesReducer;

export {
  clearField,
  fetchCurrent,
  translate,
};
