import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
// import {
//   INCREMENT_COUNTER,
//   DECREMENT_COUNTER,
//   RESET_COUNTER,
// } from "./services/constants/counterConstant";

import counterReducer from "./services/reducers/counterReducers";
import todosReducer from "./services/reducers/todosReducer";
const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;

// const store = createStore(counterReducer, applyMiddleware(thunk));
// export default store;
