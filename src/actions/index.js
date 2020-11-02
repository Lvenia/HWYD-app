import {
  QUIZ_SUBMIT,
  CHECK_AUTH
} from './actionTypes';

import axios from '../apis/api';

export const checkAthentification = () => async dispatch => {
  const response = await axios.get('/auth/login/success');

  console.log(response)

  dispatch({
    type: CHECK_AUTH,
    payload: {
      isAuthenticated: response.data.success,
      user: response.data.user
    }
  })
}


export const logOut = () => async dispatch => {
  const response = await axios.get('/auth/logout');

  if (response.status === 200) {
    dispatch({
      type: CHECK_AUTH,
      payload: {
        isAuthenticated: false,
        user: null
      }
    })
  }
  else {
    console.log('logout error')
  }
  console.log(response)
}

//QUIZ

export const submitAnswers = (localState) => {
  return {
    type: QUIZ_SUBMIT,
    payload: localState
  }
};







