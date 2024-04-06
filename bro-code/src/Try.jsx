import React, {useState} from "react";


function Try(){

    const[color, setColor] = useState();



    function handleColorChange(){
        const inpu = document.getElementById("colorIn").value;

        const bodyColor = document.querySelector("body");

        setColor(inpu);
        bodyColor.style.backgroundColor = inpu;
    }

    const [count, setCount] = useState(0);
    return(<>
    <input onChange={handleColorChange} type="color" id="colorIn"/>

    <br />
    <br />

    <span>{count}</span><br />
    <button onClick={() => {
        setCount(p => p - 1)
    }}>Decrement</button>
    <button onClick={() => {
        setCount(0)
    }}>Reset</button>
    <button onClick={() => {
        setCount(p => p + 1)
    }}>Increment</button>
    </>);
}

export default Try