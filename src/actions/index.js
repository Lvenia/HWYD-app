import {
  USER_CREATE,
  USER_EDIT,
  USER_DELETE,
  QUIZ_SUBMIT
} from './actionTypes';

import axios from '../apis/quotegarden';

export const createUser = localPayload => async dispatch => {
  const response = await axios.get('/quotes/random');
  dispatch({
    type: USER_CREATE,
    payload: {
      ...localPayload,
      quote: response.data.quote.quoteText
    }
  })
};

export const deleteUser = (id) => {
  return {
    type: USER_DELETE,
    payload: id
  };
};

export const editUser = (id, localPayload) => {
  return {
    type: USER_EDIT,
    payload: {
      id,
      ...localPayload
    }
  };
};

//QUIZ

export const submitAnswers = (localState) => {
  return {
    type: QUIZ_SUBMIT,
    payload: localState
  }
};







