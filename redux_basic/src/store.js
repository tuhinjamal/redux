import { createStore } from "redux";

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT_COUNTER":
      return {
        ...state,
        count: state.count - 1,
      };
    case "RESET_COUNTER":
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
});

export default store;
