import { useState } from "react";
import Navbar from "./components/Navbar";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  const CountFunc = () => {
     setCount((c) => c + 1);
  };

  return (
    <>
      <Navbar />
      <button onClick={CountFunc}>Count: {count}</button>
    </>
  );
}

export default App;
