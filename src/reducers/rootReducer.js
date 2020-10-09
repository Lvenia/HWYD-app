import testReducer from './testReducer';
import userReducer from './userReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  testState: testReducer,
  userState: userReducer
});

export default rootReducer;
