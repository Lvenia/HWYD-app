import questions from '../components/Quiz/questions';

import {
  QUIZ_SUBMIT,
  QUIZ_SUBMIT_SUCCESS,
  QUIZ_SUBMIT_TRIGGER,
} from '../actions/actionTypes';

const initialState = {
  data: {},
  isLoading: false,
};

export default function quizReducer(state = initialState, action) {
  switch (action.type) {
    case QUIZ_SUBMIT:

      const alowedKeys = questions.map((q) => q.name);

      const payloadKeys = Object.keys(action.payload);

      const quizSubmitData = {};

      payloadKeys.forEach((payloadKey) => {
        if (alowedKeys.includes(payloadKey)) {
          quizSubmitData[payloadKey] = action.payload[payloadKey];
        }
      });

      return {
        ...state,
        data: { ...state.data, ...quizSubmitData },
      };

    case QUIZ_SUBMIT_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };

    case QUIZ_SUBMIT_TRIGGER:
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
}
