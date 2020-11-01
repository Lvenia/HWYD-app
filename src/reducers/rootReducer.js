import userReducer from './userReducer';
import quizReducer from './quizReducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  userState: userReducer,
  quizState: quizReducer
});

export default rootReducer;
