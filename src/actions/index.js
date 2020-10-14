import {
  USER_CREATE,
  USER_EDIT,
  USER_SHOW,
  USER_LIST_ADD,
  USER_DELETE
} from './actionTypes';

export const crateUser = (localPayload) => {
  return {
    type: USER_CREATE,
    payload: {
      ...localPayload
    }
  };
};

export const showUser = (id) => {
  return {
    type: USER_SHOW,
    payload: id
  };
};

export const addNewUser = (user) => {
  return {
    type: USER_LIST_ADD,
    payload: user
  };
};

export const deleteUser = (id) => {
  return {
    type: USER_DELETE,
    payload: id
  };
};

export const editUser = (id, localPayload) => {
  return {
    type: USER_EDIT,
    payload: {
      id,
      ...localPayload
    }
  };
};






