import authReducer from './authReducer';
import quizReducer from './quizReducer';
import byDayReducer from './byDayReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  quizState: quizReducer,
  byDayState: byDayReducer
});

export default rootReducer;
