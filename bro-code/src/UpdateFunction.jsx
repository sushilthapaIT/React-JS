// updater function = A function passed as an argument to setState() usually ex. setYear(year + 1)
//                  usually updater function is written as arrow function setYear(arrow function)
//                  Allow for safe updates based on the previous state used with multiple state updates 
//                  and asynchronous functions
//                  Good practice to use updater function

import React, {useState} from "react";

function updaterFunction() {

    const [count, setCount] = useState(0);

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
        setCount(prevCount => prevCount - 1);
    }

    const reset = () => {
        setCount(0);
    }

    const increment = () => {
        setCount(c => c + 1);
        setCount(c => c + 1);
    }


    return(
        <>
            <p>{count}</p>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
        </>
    );
}


export default updaterFunction