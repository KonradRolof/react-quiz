import ActionInterface from "../interfaces/action.interface";

const initialState = null;

function errorMessage(state: string|null = initialState, action: ActionInterface): string|null {
  if ('UPDATE_ERROR_MESSAGE' === action.type) {
    return action.response;
  }

  return state
}

export default errorMessage;
