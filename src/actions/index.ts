import ActionInterface from '../interfaces/action.interface';
import QuestionInterface from '../interfaces/question.interface';
import AnswerInterface from '../interfaces/answer.interface';

export function incrementSteps(): ActionInterface {
  return { type: 'INCREMENT_STEPS' };
}

export function decrementSteps(): ActionInterface {
  return { type: 'DECREMENT_STEPS' };
}

export function getQuestions(apiUrl: string): Function {
  // return { type: 'QUESTIONS_GET' }
  return (dispatch: Function) => {
    fetch(apiUrl)
      .then((response: any) => {
        return response.json()
      })
      .then((response) => {
        const questions = [] as Array<QuestionInterface>;
        response.forEach((item: QuestionInterface) => questions.push(item));
        dispatch({ type: 'QUESTIONS_GET', response: questions } as ActionInterface)
      });
  };
}

export function selectQuestionAnswer(question: QuestionInterface, answer: AnswerInterface): ActionInterface {
  const selectedAnswerIndex = question.answers.indexOf(answer);

  if (-1 !== selectedAnswerIndex) {
    question.answers.map((item) => item.isActive = false);
    question.answers[selectedAnswerIndex].isActive = true;
  }

  return {
    type: 'QUESTIONS_SELECT_ANSWER',
    response: question
  } as ActionInterface;
}
