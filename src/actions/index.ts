import ActionInterface from '../interfaces/action.interface';
import QuestionInterface from '../interfaces/question.interface';
import AnswerInterface from '../interfaces/answer.interface';
import QuizResultInterface from '../interfaces/quiz-result.interface';

export function incrementSteps(): ActionInterface {
  return { type: 'INCREMENT_STEPS' };
}

export function decrementSteps(): ActionInterface {
  return { type: 'DECREMENT_STEPS' };
}

export function getQuestions(apiUrl: string): Function {
  return (dispatch: Function) => {
    fetch(apiUrl)
      .then((response: any) => response.json())
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

export function getQuizResults(apiUrl: string): Function {
  return (dispatch: Function) => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((response) => {
        const quizResults = [] as Array<QuizResultInterface>;
        response.forEach((item: QuizResultInterface) => quizResults.push(item));
        dispatch({ type: 'QUIZ_RESULTS_GET', response: quizResults } as ActionInterface);
      })
  };
}
