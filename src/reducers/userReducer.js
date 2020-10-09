import {
  USER_CREATE,
  USER_EDIT,
  USER_SHOW,
  USER_ADD,
  USER_DELETE
} from '../actions/actionTypes';

const initialState = {
  count: 0,
  currentUser: {
    id: 0,
    name: '',
    age: null
  },
  users: []
}

export default function userReducer(state = initialState, action) {

  switch (action.type) {

    case USER_CREATE:
      return {
        ...state,
        count: state.count + 1,
        currentUser: {
          id: state.count + 1,
          name: action.payload.name,
          age: action.payload.age
        }
      };

    case USER_ADD:
      return {
        ...state,
        users: [...state.users, state.currentUser]
      }
  }

  return state;
}
