import react, {useState} from "react";
function App() {

  const [count, setCount] = useState(4) //usestate returns two value

  const [theme, setTheme] = useState("blue") //usestate returns two value


  function decrementCount(){
    setCount(prevCount => prevCount - 1)
    setTheme("blue")
  }

  function incrementCount(){
    setCount(prevCount => prevCount + 1)
    setTheme("red")
  }

  return (
    <>
    <button onClick={decrementCount}>-</button>
    <span>{count}</span>
    <span>{theme}</span>
    <button onClick={incrementCount}>+</button>
    </>
  )
}

export default App
