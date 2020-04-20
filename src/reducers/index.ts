import { combineReducers } from 'redux';
import questions from './questions';
import steps from './steps';
import quizResults from './quiz-results';
import errorMessage from './error-message';

const reduce = combineReducers({
  questions: questions,
  steps: steps,
  quizResults: quizResults,
  errorMessage: errorMessage,
});

export default reduce;
