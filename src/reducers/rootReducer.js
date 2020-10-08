import testReducer from './testReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  testState: testReducer
});

export default rootReducer;
