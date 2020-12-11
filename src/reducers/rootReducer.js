import authReducer from './authReducer';
import quizReducer from './quizReducer';
import dayReviewReducer from './dayReviewReducer';
import overviewReducer from './overviewReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  quizState: quizReducer,
  dayReviewState: dayReviewReducer,
  overviewState: overviewReducer
});

export default rootReducer;
