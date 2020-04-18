import ActionInterface from '../interfaces/action.interface';
import QuestionInterface from '../interfaces/question.interface';

const initialState = null;
const questionsArr = [
  {
    id: 0,
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit?',
    answers: [
      {
        id: 0,
        text: 'Aenean commodo ligula eget dolor. Aenean massa.',
        isActive: false
      },
      {
        id: 1,
        text: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        isActive: false
      },
      {
        id: 3,
        text: 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa.',
        isActive: false
      },
      {
        id: 4,
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        isActive: false
      }
    ]
  },
  {
    id: 2,
    text: 'Aenean commodo ligula eget dolor. Aenean massa?',
    answers: [
      {
        id: 5,
        text: 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa.',
        isActive: false
      },
      {
        id: 6,
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        isActive: false
      },
      {
        id: 7,
        text: 'Aenean commodo ligula eget dolor. Aenean massa.',
        isActive: false
      },
      {
        id: 8,
        text: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        isActive: false
      }
    ]
  },
  {
    id: 3,
    text: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus?',
    answers: [
      {
        id: 9,
        text: 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa.',
        isActive: false
      },
      {
        id: 10,
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        isActive: false
      },
      {
        id: 11,
        text: 'Aenean commodo ligula eget dolor. Aenean massa.',
        isActive: false
      },
      {
        id: 12,
        text: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        isActive: false
      }
    ]
  }
] as Array<QuestionInterface>;

function questions(state: Array<QuestionInterface>|null = initialState, action: ActionInterface): Array<QuestionInterface>|null {
  if ("QUESTIONS_GET" === action.type) {
    return questionsArr;
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

  return state;
}

export default questions;
