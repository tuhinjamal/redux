import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
  resetCounter,
} from "../../services/actions/counterAction";
const Counter = () => {
  const [count, setCount] = useState(0);
  const reduxCount = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();
  const increment = () => {
    dispatch(incrementCounter());
  };
  const decrement = () => {
    dispatch(decrementCounter());
  };
  const reset = () => {
    dispatch(resetCounter());
  };
  return (
    <>
      <div>
        <h1>Counter App</h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      <div>
        <p>Redux Count: {reduxCount}</p>
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => decrement()}>Decrement</button>
        <button onClick={() => reset()}>Reset</button>
      </div>
    </>
  );
};

export default Counter;

// 1.state - count : 0
// 2.actions - increment, decrement, and reset
// 3.reducers - increment -> count + 1, decrement -> count - 1, reset -> 0
// 4.store
// 5.Providing store in App.jsx
// 6.using store
