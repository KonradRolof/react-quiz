import QuestionsApiService from '../services/questions-api.service';
import QuizResultsApiService from '../services/quiz-results-api.service';
import ActionInterface from '../interfaces/action.interface';
import QuestionInterface from '../interfaces/question.interface';
import AnswerInterface from '../interfaces/answer.interface';
import QuizResultInterface from '../interfaces/quiz-result.interface';

const questionApiService = new QuestionsApiService();
const quizResultsApiService = new QuizResultsApiService();

export function incrementSteps(): ActionInterface {
  return { type: 'INCREMENT_STEPS' };
}

export function decrementSteps(): ActionInterface {
  return { type: 'DECREMENT_STEPS' };
}

export function getQuestions(): Function {
  return (dispatch: Function) => {
    questionApiService
      .getAll()
      .then((response) => {
        const questions = [] as Array<QuestionInterface>;
        response.forEach((item: QuestionInterface) => questions.push(item));
        dispatch({ type: 'QUESTIONS_GET', response: questions } as ActionInterface)
      })
      .catch((error) => {
        // @TODO add error handling
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

export function getQuizResults(): Function {
  return (dispatch: Function) => {
    quizResultsApiService
      .getAll()
      .then((response) => {
        const quizResults = [] as Array<QuizResultInterface>;
        response.forEach((item: QuizResultInterface) => quizResults.push(item));
        dispatch({ type: 'QUIZ_RESULTS_GET', response: quizResults } as ActionInterface);
      })
      .catch((error) => {
        // @TODO add error handling
      });
  };
}
