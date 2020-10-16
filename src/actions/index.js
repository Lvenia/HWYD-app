import {
  USER_CREATE,
  USER_EDIT,
  USER_DELETE
} from './actionTypes';

export const createUser = (localPayload) => {

  return {
    type: USER_CREATE,
    payload: {
      ...localPayload
    }
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






