import {
  CHECK_AUTH,
  CHECK_AUTH_TRIGGER,
  CHECK_AUTH_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  isAuthenticated: false,
  user: null,
  isLoading: true,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };

    case CHECK_AUTH_TRIGGER:
      return {
        ...state,
        isLoading: true,
      };

    case CHECK_AUTH:
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        user: action.payload.user,
      };
    default:
      return state;
  }
}
