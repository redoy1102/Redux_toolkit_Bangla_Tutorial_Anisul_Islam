const { createStore } = require("redux");

// Constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

// States
const initialState = {
  counter: 0,
};

// Actions
const incrementAction = () => {
  return {
    type: INCREMENT,
  };
};

const decrementAction = () => {
  return {
    type: DECREMENT,
  };
};

const resetAction = () => {
  return {
    type: RESET,
  };
};

// Reducers
const incrementReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case RESET:
      return {
        ...state,
        counter: 0,
      };
    default:
      return state;
  }
};

// Store
const store = createStore(incrementReducer);
store.subscribe(() => {
  console.log("State updated:", store.getState());
});

// Dispatch actions
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(resetAction());
