import { useSelector, useDispatch } from "react-redux";

import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
function CounterView() {
  const counter = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1 className="test">Counter View With Redux Toolkit </h1>
      <h3>Count : {counter}</h3>
      <button onClick={() => dispatch(increment())}>Increment</button> &nbsp;
      <button onClick={() => dispatch(decrement())}>Increment</button> &nbsp;
      <button onClick={() => dispatch(reset())}>Reset</button> &nbsp;
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment By 5
      </button>
    </div>
  );
}

export default CounterView;
