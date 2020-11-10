import {
  QUIZ_SUBMIT,
  CHECK_AUTH
} from './actionTypes';

import axios from '../apis/api';

//AUTHENTIFICATION

export const checkAthentification = () => async dispatch => {
  try {
    const response = await axios.get('/auth/login/success');

    dispatch({
      type: CHECK_AUTH,
      payload: {
        isAuthenticated: response.data.success,
        user: response.data.user
      }
    });

  } catch (err) {
    alert(`Login failure, ${err.message}`)
  }
};

export const logOut = () => async dispatch => {
  try {
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
      throw new Error('The response status of logout is different than 200')
    }

  } catch (err) {
    alert(`Logout failure, ${err.message}`)
  }
};

//QUIZ

export const submitAnswers = (localState) => {
  return {
    type: QUIZ_SUBMIT,
    payload: localState
  }
};

export const submitQuiz = () => async (dispatch, getState) => {

  try {
    const dataToSend = getState();
    const response = await axios.post('/answers', dataToSend.quizState);

    if (!response.status === 201) {
      throw new Error(`Answers have not been posted, response status is ${response.status}`);
    }
  } catch (err) {
    alert(`Quiz submition failed, ${err.message}`);
  }
};

export const getTodaysAnswers = () => async dispatch => {
  try {
    const response = await axios.get('/answers?range=today');
    if (response.status === 200) {
      dispatch({
        type: QUIZ_SUBMIT,
        payload: response.data[0] || {}
      });
    } else {
      throw new Error(`Today's answers have not been loaded, ${response.status}`);
    }
  } catch (err) {
    alert(`Error of the getTodaysAnswer request, ${err.message}`);
  }
};







