import { Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export function counterReducer (state: number = 0, action: Action) {
  console.log('action.type:' + action.type);
  switch (action.type) {
    case INCREMENT:
      console.log('state=' + (state - 0 + 1));
      return state + 1;
    case DECREMENT:
      console.log('state=' + (state - 1));
      return state - 1;
    case RESET:
      console.log('state=0');
      return 0;
    default:
      return state;
  }
}
