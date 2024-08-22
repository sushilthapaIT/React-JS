import { useEffect, useRef } from "react";

export default function App() {
  // create a ref
  const counter = useRef(0);

  // increase the counter by one
  const handleIncreaseCounter = () => {
    counter.curent = counter.current + 1;
  };

  useEffect(() => {
    console.log("counter changed to: ", counter.current);
  }, [counter]);

  return (
    <div>
      <h1>Learn about useRef!</h1>
      <h2>Value: {counter.current}</h2>
      <button onClick={handleIncreaseCounter}>
Increase counter
    </button>
    </div>
  );
}
