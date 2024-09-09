import { useState } from "react";

import "./App.css";
import Counter from "./pages/counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="test">Welcome to CIO Portal </h1>
      <Counter />
    </>
  );
}

export default App;
