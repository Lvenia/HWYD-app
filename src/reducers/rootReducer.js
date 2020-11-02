import authReducer from './authReducer';
import quizReducer from './quizReducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  quizState: quizReducer
});

export default rootReducer;
