import userReducer from './userReducer';
import hwydReducer from './hwydReducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  userState: userReducer,
  hwydSate: hwydReducer
});

export default rootReducer;
