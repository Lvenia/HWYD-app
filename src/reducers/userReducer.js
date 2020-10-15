import {
  USER_CREATE,
  USER_EDIT,
  USER_DELETE
} from '../actions/actionTypes';

const initialState = {
  users: []
};

export default function userReducer(state = initialState, action) {

  switch (action.type) {

    case USER_CREATE:
      const newUser = {
        id: Math.ceil((Math.random() * 10000)),
        name: action.payload.name,
        age: action.payload.age
      }
      return {
        ...state,
        users: [...state.users, newUser]
      };

    case USER_DELETE:
      return {
        ...state,
        users: state.users.filter(u => Number(action.payload) !== u.id)
      };

    case USER_EDIT:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.payload.id) {
            return {
              id: action.payload.id,
              name: action.payload.name,
              age: action.payload.age
            };
          } else {
            return user;
          }
        })
      };
  }
  return state;
}
