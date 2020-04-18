import { combineReducers } from 'redux';
import questions from './questions';
import steps from './steps';

const reduce = combineReducers({
  questions: questions,
  steps: steps
});

export default reduce;
