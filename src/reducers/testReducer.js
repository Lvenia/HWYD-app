const initialState = {
  counter: 0,
};

export default function testReducer(state = initialState, action) {
  // action.payload === 3
  switch (action.type) {
    case 'INCREMENT_BY_ONE':
      // ho4u verty object aka state
      // {
      //  ab: ...,
      //   counter: 0, // counter + 1
      // }
      return {
        ...state,
        counter: state.counter + 1
      };
    case 'DECREMENT_BY_ONE':
      return state - 1
    default:
      return state
  }
}