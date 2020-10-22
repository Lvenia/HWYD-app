import userReducer from './userReducer';
import quizReducer from './quizReducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  userState: userReducer,
  quizSate: quizReducer
});

export default rootReducer;
