import ActionInterface from '../interfaces/action.interface';

const initialState = 0;

function steps(state = initialState, action: ActionInterface): number {
  if ('INCREMENT_STEPS' === action.type) {
    return state + 1;
  }

  if ('DECREMENT_STEPS' === action.type) {
    return 0 < state ? state - 1 : state;
  }

  return state;
}

export default steps;
