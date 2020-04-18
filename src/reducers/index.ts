import { combineReducers } from 'redux';
import questions from './questions';
import steps from './steps';
import quizResults from "./quiz-results";

const reduce = combineReducers({
  questions: questions,
  steps: steps,
  quizResults: quizResults
});

export default reduce;
