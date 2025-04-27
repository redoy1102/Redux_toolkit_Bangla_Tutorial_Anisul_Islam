const { createStore } = require("redux");

const INCREMENT = "INCREMENT";

const stockState = {
  gptPlus: 0,
  claude: 0,
};

const incrementAction = () => {
  return {
    type: INCREMENT,
  };
};

const stockReducer = (state = stockState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        gptPlus: state.gptPlus + 1,
        claude: state.claude + 1,
      };
  }
};

const store = createStore(stockReducer);
store.subscribe(() => {
  console.log("State update:", store.getState());
});

store.dispatch(incrementAction());
