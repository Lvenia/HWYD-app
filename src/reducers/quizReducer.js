import questions from '../components/Quiz/questions'

import {
  QUIZ_SUBMIT
} from '../actions/actionTypes'

const initialState = {};

export default function quizReducer(state = initialState, action) {

  switch (action.type) {

    case QUIZ_SUBMIT:

      const alowedKeys = questions.map(q => {
        return q.name
      });
      const payloadKeys = Object.keys(action.payload);
     
      let quizSubmitData = {};

      payloadKeys.forEach(payloadKey => {
        if (alowedKeys.includes(payloadKey)) {
          quizSubmitData[payloadKey] = action.payload[payloadKey]
        }
      });

      return {
        ...state,
        ...quizSubmitData
      };

    default:
      return state;
  }
};
