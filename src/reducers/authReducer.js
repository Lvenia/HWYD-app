import { CHECK_AUTH } from '../actions/actionTypes';

const initialState = {
  isAuthenticated: false,
  user: null
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_AUTH:
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        user: action.payload.user
      }
    default:
      return state
  }
}