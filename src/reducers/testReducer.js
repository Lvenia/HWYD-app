import * as ActionTypes from '../actions/actionTypes';

const initialState = {
  counter: 0,
  names: [],
  person: {},
  persons: []
};

export default function testReducer(state = initialState, action) {

  switch (action.type) {

    case ActionTypes.INCREMENT_BY_ONE:
      return {
        ...state,
        counter: state.counter + 1
      };

    case ActionTypes.DECREMENT_BY_ONE:
      return {
        ...state,
        counter: state.counter - 1
      };

    case ActionTypes.ADD_USERDATA:
      return {
        ...state,
        person: action.payload
      };

    case ActionTypes.ADD_NAME:
      const namesArray = action.payload
      return {
        ...state,
        names: namesArray
      };

    case ActionTypes.ADD_ELEMENT_TO_ARRAY:
      const names = ['name', 'name2', 'name3'];
      const newArray = names.concat(action.payload);

      return {
        ...state,
        names: newArray
      };

    case ActionTypes.ADD_USER:
      const newPerson = action.payload;

      return {
        ...state,
        persons: [...state.persons, newPerson]
      };

    default:
      return state;
  }
}