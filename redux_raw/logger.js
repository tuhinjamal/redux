const { createStore, applyMiddleware } = require("redux");
const { logger } = require("redux-logger");
// product constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";
// product state
const initailProductState = {
  products: ["sugar", "salt"],
  numberOfProducts: 2,
};
// product reducer
const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};

const addProduct = (value) => {
  return {
    type: ADD_PRODUCT,
    payload: value,
  };
};
const productReducer = (state = initailProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        // products: ["sugar", "salt", "oil"],
      };
    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };
    default:
      return state;
  }
};

const store = createStore(productReducer, applyMiddleware(logger));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(addProduct("oil"));
store.dispatch(addProduct("rice"));
store.dispatch(addProduct("wheat"));
store.dispatch(addProduct("corn"));
store.dispatch(addProduct("eggs"));
store.dispatch(getProducts());

// console.log(store.getState());
