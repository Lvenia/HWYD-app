
/*
Actions are the plain js objects containing type key

const action = {
  type: 'ACTION_TYPE',
  payload: //can be anythyng - another object, array, variable
};

Action is named and return by the action creator (a function)

const actionName = (param1, param2) => {
  return {
    type: 'ACTION_TYPE',
    payload: {
      name: param1,
      age: param2
    }
  };
};

perameters will be recieves by function after the function call, in which we perekazujemo parametry;


*/

import {
  INCREMENT_BY_ONE,
  DECREMENT_BY_ONE,
  ADD_USERDATA,
  ADD_NAME,
  ADD_ELEMENT_TO_ARRAY,
  ADD_USER
} from './actionTypes';

//Action creators with no parameters, no payload
export const plusOne = () => {
  return {
    type: INCREMENT_BY_ONE
  }
};

export const minusOne = () => {
  return {
    type: DECREMENT_BY_ONE
  }
};

//Action creator receiving properties from the action creator call and passing them into payload object

export const createUser = (name, country, age) => {
  return {
    type: ADD_USERDATA,
    payload: {
      name,
      country,
      age
    }
  };
};

//Action creator receiving properties from the action creator call and passing them into payload array

export const names = (a, b, c) => {
  return {
    type: ADD_NAME,
    payload: [a, b, c]
  }
}

export const addName = (newElement) => {
  return {
    type: ADD_ELEMENT_TO_ARRAY,
    payload: newElement
  }
}

export const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user
  }
}



