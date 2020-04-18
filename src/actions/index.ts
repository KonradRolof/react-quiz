import ActionInterface from '../interfaces/action.interface';
import QuestionInterface from '../interfaces/question.interface';
import AnswerInterface from '../interfaces/answer.interface';

export function incrementSteps(): ActionInterface {
  return { type: 'INCREMENT_STEPS' };
}

export function decrementSteps(): ActionInterface {
  return { type: 'DECREMENT_STEPS' };
}

export function getQuestions(): ActionInterface {
  return { type: 'QUESTIONS_GET' }
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
