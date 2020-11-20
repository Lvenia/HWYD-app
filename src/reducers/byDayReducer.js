import {
  GET_ANSWERS_BY_DAY,
  GET_ANSWERS_BY_DAY_SUCCESS,
  GET_ANSWERS_BY_DAY_TRIGGER
} from '../actions/actionTypes';

import questions from '../components/Quiz/questions';

const initialState = {
  data: {},
  isLoading: false
};

export default function byDayReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ANSWERS_BY_DAY_SUCCESS:
      return {
        ...state,
        isLoading: false
      };

    case GET_ANSWERS_BY_DAY_TRIGGER:
      return {
        ...state,
        isLoading: true
      };

    case GET_ANSWERS_BY_DAY:

      const alowedKeys = questions.map(q => { return q.name });
      const payloadKeys = Object.keys(action.payload);

      let answersByDay = {};

      payloadKeys.forEach(payloadKey => {
        if (alowedKeys.includes(payloadKey)) {
          answersByDay[payloadKey] = action.payload[payloadKey];
        }
      });

      return {
        ...state,
        data: answersByDay
      };

    default:
      return state;
  }
}