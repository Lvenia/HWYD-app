import userReducer from './userReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  userState: userReducer
});

export default rootReducer;
