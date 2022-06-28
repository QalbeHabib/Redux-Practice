import { createStore } from 'redux';

const intiialState = {
  counter: 0,
};

const ReducerFn = (state = intiialState, action) => {
  switch (action.type) {
    case 'INC':
      return {
        counter: state.counter + 1,
      };
    case 'DEC':
      return {
        counter: state.counter - 1,
      };
    case 'ADD':
      return {
        counter: state.counter + action.payload,
      };
    case 'RED':
      return {
        counter: state.counter - action.payload,
      };

    default:
      return state;
  }
};

export const store = createStore(ReducerFn);
