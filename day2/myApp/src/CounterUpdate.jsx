import React, {useState} from 'react';

function CounterUpdate(){

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count => count+1); //function passed as an argument to setState
    }

    const decrement = () => {
        setCount(count => count-1);
    }

    const reset = () => {
        setCount(count => count = 0);
    }

    return (
        <div className='counter-container'>
            <p className='count-display'>{count}</p>
            <button className='counter-button' onClick={decrement}>Decrement</button>
            <button className='counter-button' onClick={reset}>Reset</button>
            <button className='counter-button' onClick={increment}>Increment</button>

        </div>
    );
}

export default CounterUpdate