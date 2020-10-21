
import { QUIZ_SUBMIT } from '../actions/actionTypes'

const initialState = {

}

export default function hwydReducer(state = initialState, action) {

  switch (action.type) {

    case QUIZ_SUBMIT:

      return {
        ...state,
        ...action.payload
      }

    default:
      return state;
  }

}