import {
  GET_DAY_REVIEW_ANSWERS,
  GET_DAY_REVIEW_ANSWERS_SUCCESS,
  GET_DAY_REVIEW_ANSWERS_TRIGGER,
} from '../actions/actionTypes';

import questions from '../components/Quiz/questions';

const initialState = {
  data: {},
  isLoading: false,
};

export default function dayReviewReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DAY_REVIEW_ANSWERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };

    case GET_DAY_REVIEW_ANSWERS_TRIGGER:
      return {
        ...state,
        isLoading: true,
      };

    case GET_DAY_REVIEW_ANSWERS: {
      const alowedKeys = questions.map((q) => q.name);
      const payloadKeys = Object.keys(action.payload);

      const answersByDay = {};

      payloadKeys.forEach((payloadKey) => {
        if (alowedKeys.includes(payloadKey)) {
          answersByDay[payloadKey] = action.payload[payloadKey];
        }
      });

      return {
        ...state,
        data: answersByDay,
      };
    }

    default:
      return state;
  }
}
