import ActionInterface from '../interfaces/action.interface';
import QuizResultInterface from '../interfaces/quiz-result.interface';

const initialState = null;

function quizResults(state = initialState, action: ActionInterface): Array<QuizResultInterface>|null {
  if ('QUIZ_RESULTS_GET' === action.type) {
    return action.response;
  }

  return state;
}

export default quizResults;
