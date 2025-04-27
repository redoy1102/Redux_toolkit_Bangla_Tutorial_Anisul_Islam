const { createStore, combineReducers } = require("redux");

const ADD_PRODUCT = "ADD_PRODUCT";
const GET_PRODUCT = "GET_PRODUCT";
const REMOVE_LAST_PRODUCT = "REMOVE_Last_PRODUCT";

const initialState = {
  products: ["Chat GPT Plus", "Claude", "YouTube Premium"],
  totalProducts: 3,
};

const cart = [];

// Cart actions
const addCartAction = (product) => {
  return {
    type: "ADD_CART",
    payload: product,
  };
};

const getCartActin = () => {
  return {
    type: "GET_ART",
  };
};

const getProductsAction = () => {
  return {
    type: GET_PRODUCT,
  };
};

const addProductAction = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

const removeLastProductAction = () => {
  return {
    type: REMOVE_LAST_PRODUCT,
  };
};

// Reducers
const cartReducer = (state = cart, action) => {
  switch (action.type) {
    case "ADD_CART":
      return [...state, action.payload];
    case "GET_CART":
      return state;
    default:
      return state;
  }
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return state;
    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
        totalProducts: state.totalProducts + 1,
      };
    case REMOVE_LAST_PRODUCT:
      return {
        products: state.products.slice(0, -1),
        totalProducts: state.totalProducts - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  productR: productReducer,
  cartR: cartReducer,
});

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log("State updated:", store.getState());
});

store.dispatch(addProductAction("Google Drive"));
store.dispatch(getProductsAction());
// store.dispatch(removeLastProductAction());

store.dispatch(addCartAction("Chat GPT Plus"));
// store.dispatch(addCartAction("Claude"));
store.dispatch(getCartActin());
