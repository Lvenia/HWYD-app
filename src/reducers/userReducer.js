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
            return element
          };
        })
      };

    case USER_DELETE:
      console.log(state.users.filter(u => Number(action.payload !== u.id)))
      // const newUserArray = state.users.filter(u => (u.id !== (action.payload)))
      return {
        ...state,
        users: state.users.filter(u => Number(action.payload) !== u.id)
      }

    case USER_EDIT:
      //recieves a new data
      // const editedUser = {
      //   id: action.payload.id,
      //   name: action.payload.name,
      //   age: action.payload.age
      // }
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.payload.id) {
            return {
              id: action.payload.id,
              name: action.payload.name,
              age: action.payload.age
            }
          } else {
            return user
          }
        })
      }
    //znajty vidpovidnyj object => on click vidkryty novyj tab, w jakomy budut inputy z poperednioju vartistiu
    //on submit vidpovidnyj object v arr bude nadpysuvatysia, bez zminy id
  }

  return state;
}
