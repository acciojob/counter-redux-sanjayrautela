// Action Types
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Action Creators
export const incrementCounter = () => ({
  type: INCREMENT,
});

export const decrementCounter = () => ({
  type: DECREMENT,
});
