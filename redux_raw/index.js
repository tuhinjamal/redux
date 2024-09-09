// import redux
const { createStore } = require("redux");
// defining constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
const ADD_USER = "ADD_USER";

// state
const initialCounterState = {
  count: 0,
};
const initialUsersState = {
  count: 0,
  name: [{ name: "tuhinjamal" }],
};
// action - object with type and payload
// INCREMENT COUNTER
const incrementCounterAction = () => {
  return {
    type: INCREMENT,
  };
};
const incrementCounterByValueAction = (value) => {
  return {
    type: INCREMENT_BY_VALUE,
    payload: value,
  };
};

// DECREMENTCOUNTER
const decrementCounterAction = () => {
  return {
    type: DECREMENT,
  };
};

const addUserAction = (value) => {
  return {
    type: ADD_USER,
    payload: value,
  };
};
// reducer
const counterReducer = (state = initialUsersState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case INCREMENT_BY_VALUE:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case ADD_USER:
      return {
        // ...state,
        name: [...state.name, action.payload],
        count: state.count + 1,
      };
    default:
      return state;
  }
};
// store  - getState(), dispatch(), subscribe()
const store = createStore(counterReducer);
store.subscribe(() => {
  console.log(store.getState());
});
// store.dispatch(incrementCounterAction());
// store.dispatch(incrementCounterAction());
// store.dispatch(decrementCounterAction());
// store.dispatch(incrementCounterByValueAction(50));
store.dispatch(addUserAction({ name: "Mujtaba" }));
store.dispatch(addUserAction({ name: "Ahmad" }));
store.dispatch(addUserAction({ name: "Yusuf" }));
store.dispatch(addUserAction({ name: "Yusuf" }));
store.dispatch(addUserAction({ name: "Yusuf" }));
store.dispatch(addUserAction({ name: "Yusuf" }));
store.dispatch(addUserAction({ name: "Yusuf" }));
store.dispatch(addUserAction({ name: "Yusuf" }));
store.dispatch(addUserAction({ name: "Yusuf" }));
store.dispatch(addUserAction({ name: "Yusuf" }));

/*
    1.state
    2.dispatch action
    3.reducer
    4.store

*/
