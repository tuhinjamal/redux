const { createStore, combineReducers } = require("redux");
// product constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";
// cart constants
const GET_CART_ITEMS = "GET_CART_ITEMS";
const ADD_TO_CART = "ADD_TO_CART";
// product state
const initailProductState = {
  products: ["sugar", "salt"],
  numberOfProducts: 2,
};

// cart state
const initailCartState = {
  cartItems: ["sugar"],
  numberOfCartItems: 1,
};
// product actions
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

// cart actions
const getCartItems = () => {
  return {
    type: GET_CART_ITEMS,
  };
};
const addCart = (value) => {
  return {
    type: ADD_TO_CART,
    payload: value,
  };
};

// product reducer
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

// cart reducer
const cartReducer = (state = initailCartState, action) => {
  switch (action.type) {
    case GET_CART_ITEMS:
      return {
        ...state,
      };
    case ADD_TO_CART:
      return {
        cartItems: [...state.cartItems, action.payload],
        numberOfCartItems: state.numberOfCartItems + 1,
      };
    default:
      return state;
  }
};
const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
});
const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(addProduct("oil"));
store.dispatch(addProduct("rice"));
store.dispatch(addProduct("wheat"));
store.dispatch(addProduct("sugar"));
store.dispatch(addProduct("eggs"));
store.dispatch(getProducts());
store.dispatch(addCart("sugar"));
store.dispatch(addCart("salt"));
store.dispatch(getCartItems());
// console.log(store.getState());
