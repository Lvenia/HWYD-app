import {
  GET_OVERVIEW_ANSWERS,
  GET_OVERVIEW_ANSWERS_SUCCESS,
  GET_OVERVIEW_ANSWERS_TRIGGER
} from '../actions/actionTypes';
import { THIS_WEEK } from '../constants';

const initialState = {
  data: {},
  timePeriod: THIS_WEEK.value,
  isLoading: false
};

export default function overwievReducer(state = initialState, action) {
  switch (action.type) {
    case GET_OVERVIEW_ANSWERS_SUCCESS:
      return {
        ...state,
        isLoading: false
      };

    case GET_OVERVIEW_ANSWERS_TRIGGER:
      return {
        ...state,
        isLoading: true
      };

    case GET_OVERVIEW_ANSWERS:
      return {
        ...state,
        data: action.payload.responseData,
        timePeriod: action.payload.timePeriod
      };

    default:
      return state;
  }
};
