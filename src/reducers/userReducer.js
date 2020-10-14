import {
  USER_CREATE,
  USER_EDIT,
  USER_SHOW,
  USER_LIST_ADD,
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
};

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

    case USER_LIST_ADD:
      return {
        ...state,
        users: [...state.users, state.currentUser]
      };

    case USER_SHOW:
      return {
        ...state,
        currentUser: state.users.find(element => {
          if (element.id === action.payload) {
            return element;
          };
        })
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
