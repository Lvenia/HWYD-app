/* eslint-disable no-console */
import {
  CHECK_AUTH,
  CHECK_AUTH_TRIGGER,
  CHECK_AUTH_SUCCESS,

  QUIZ_SUBMIT,
  QUIZ_SUBMIT_SUCCESS,
  QUIZ_SUBMIT_TRIGGER,

  GET_DAY_REVIEW_ANSWERS,
  GET_DAY_REVIEW_ANSWERS_SUCCESS,
  GET_DAY_REVIEW_ANSWERS_TRIGGER,

  GET_OVERVIEW_ANSWERS,
  GET_OVERVIEW_ANSWERS_SUCCESS,
  GET_OVERVIEW_ANSWERS_TRIGGER,
} from './actionTypes';

import axios from '../apis/api';

// AUTHENTIFICATION

export const checkAthentification = () => async (dispatch) => {
  try {
    dispatch({
      type: CHECK_AUTH_TRIGGER,
    });

    const response = await axios.get('/auth/login/success');

    if (response.status === 200) {
      dispatch({
        type: CHECK_AUTH,
        payload: {
          isAuthenticated: response.data.success,
          user: response.data.user,
        },
      });

      dispatch({
        type: CHECK_AUTH_SUCCESS,
      });
    }
  } catch (err) {
    console.log(`Login failure, ${err.message}`);
  }
};

export const logOut = () => async (dispatch) => {
  try {
    const response = await axios.get('/auth/logout');

    if (response.status === 200) {
      dispatch({
        type: CHECK_AUTH,
        payload: {
          isAuthenticated: false,
          user: null,
        },
      });
    } else {
      throw new Error('The response status of logout is different than 200');
    }
  } catch (err) {
    console.log(`Logout failure, ${err.message}`);
  }
};

// QUIZ

export const submitAnswers = (localState) => ({
  type: QUIZ_SUBMIT,
  payload: localState,
});

export const submitQuiz = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: QUIZ_SUBMIT_TRIGGER,
    });

    const dataToSend = getState();
    const response = await axios.post('/answers', dataToSend.quizState.data);

    if (response.status === 201) {
      dispatch({
        type: QUIZ_SUBMIT_SUCCESS,
      });
    } else {
      throw new Error(`Answers have not been posted, response status is ${response.status}`);
    }
  } catch (err) {
    console.log(`Quiz submition failed, ${err.message}`);
  }
};

// DAY SUMMARY

export const getTodaysAnswers = () => async (dispatch) => {
  try {
    const response = await axios.get('/answers?range=today');
    if (response.status === 200) {
      dispatch({
        type: QUIZ_SUBMIT,
        payload: response.data[0] || {},
      });
    } else {
      throw new Error(`Today's answers have not been loaded, ${response.status}`);
    }
  } catch (err) {
    console.log(`Error of the getTodaysAnswer request, ${err.message}`);
  }
};

export const getDayReviewAnswers = (day) => async (dispatch) => {
  try {
    dispatch({
      type: GET_DAY_REVIEW_ANSWERS_TRIGGER,
    });

    const response = await axios.get(`/answers/${day}`);

    if (response.status === 200) {
      dispatch({
        type: GET_DAY_REVIEW_ANSWERS,
        payload: response.data || {},
      });

      dispatch({
        type: GET_DAY_REVIEW_ANSWERS_SUCCESS,
      });
    } else {
      throw new Error('getDayReviewAnswers request feiled');
    }
  } catch (err) {
    console.log(`Something wron with the getAnswersByDate, ${err.message}`);
  }
};

// OVERVIEW

export const getOverviewAnswers = (timePeriod) => async (dispatch) => {
  try {
    dispatch({
      type: GET_OVERVIEW_ANSWERS_TRIGGER,
    });

    const response = await axios.get(`/answers/?range=${timePeriod}`);

    if (response.status === 200) {
      dispatch({
        type: GET_OVERVIEW_ANSWERS,
        payload: {
          responseData: response.data || {},
          timePeriod,
        },
      });

      dispatch({
        type: GET_OVERVIEW_ANSWERS_SUCCESS,
      });
    } else {
      throw new Error('getOverviewAnswers request failed');
    }
  } catch (err) {
    console.log(`Something wrong with getOverviewAnswers, ${err.message}`);
  }
};
