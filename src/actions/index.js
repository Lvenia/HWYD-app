import {
  USER_CREATE,
  USER_EDIT,
  USER_DELETE
} from './actionTypes';

import axios from '../apis/quotegarden';

// export const createUser = (localPayload) => {

//   axios.get()
//     .then(response => {
//       console.log(response.data);
//       console.log(response.data.quote.quoteText);

//       return {
//         type: USER_CREATE,
//         payload: {
//           ...localPayload,
//           quote: response.data.quote.quoteText
//         }
//       };

//       // return response.data.quote.quoteText;

//     })
//     .catch(error => console.log(error))
// };

// export const createUser = async (localPayload) => {

//   const response = await axios.get('/quotes/random');

//   console.log(response);
//   console.log(response.data.quote.quoteText);

//   return {
//     type: USER_CREATE,
//     payload: {
//       ...localPayload,
//       quote: response.data.quote.quoteText
//     }
//   };
// };

export const createUser = localPayload => async dispatch => {
  const response = await axios.get('/quotes/random');
  dispatch({
    type: USER_CREATE,
    payload: {
      ...localPayload,
      quote: response.data.quote.quoteText
    }
  })
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






