import { Reducer } from 'redux';
import { Action, ActionType as Type } from './action';

export type CounterState = {
  count: number;
};
export const initialState: CounterState = { count: 0 };

export const counterReducer: Reducer<CounterState, Action> = (
  state: CounterState = initialState,
  action: Action
): CounterState => {
  switch (action.type) {
    case Type.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case Type.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    default:
      const check: never = action.type;
      return state;
  }
};
