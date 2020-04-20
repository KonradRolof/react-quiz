import ActionInterface from '../interfaces/action.interface';
import QuestionInterface from '../interfaces/question.interface';

const initialState = null;

function questions(state: Array<QuestionInterface>|null = initialState, action: ActionInterface): Array<QuestionInterface>|null {
  if ("QUESTIONS_GET" === action.type) {
    return action.response;
  }

  if ('QUESTIONS_SELECT_ANSWER' === action.type) {
    if (null !== state) {
      const updatedQuestions = state.slice();
      const i = updatedQuestions.indexOf(action.response);

      if (-1 !== i) {
        updatedQuestions[i] = action.response;
        return updatedQuestions;
      }

      return state;
    }

    return state;
  }

  if ('QUESTIONS_REST_ANSWERS' === action.type) {
    if (null !== state) {
      const questions = [...state];

      questions.forEach((question) => {
        question.answers.forEach((answer) => answer.isActive = false);
      });

      return questions;
    }

    return state;
  }

  return state;
}

export default questions;
