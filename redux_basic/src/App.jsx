import { useState } from "react";

import "./App.css";
import Counter from "./pages/counter";
import Todos from "./pages/todos";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="test">Welcome to CIO Portal </h1>
      <Counter />
      <Todos />
    </>
  );
}

export default App;
