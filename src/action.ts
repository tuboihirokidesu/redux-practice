export const ActionType = {
  DECREMENT: 'DECREMENT',
  INCREMENT: 'INCREMENT',
} as const;

type ValueOf<T> = T[keyof T];
export type Action = {
  type: ValueOf<typeof ActionType>;
  amount?: number;
};

export const decrement = (): Action => ({
  type: ActionType.DECREMENT,
});
export const increment = (): Action => ({
  type: ActionType.INCREMENT,
});
