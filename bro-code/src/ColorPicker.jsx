// import React, {useState} from "react";

// function ColorPicker(){

//     const [coloor, setColor] = useState("blue")

//     function handleColor(){
//         const inpu = document.getElementById("colorPicker").value;
//         const boody = document.querySelector("body");

//         setColor(inpu);
//         boody.style.backgroundColor = inpu;
//     }

//     return(<>
//         <h1>I am color picker</h1>
//         <input onChange={handleColor} id="colorPick" type="color" />
//     </>);
// }

// export default ColorPicker


import React, { useState } from "react";

function ColorPicker() {
    const [color, setColor] = useState("blue");

    function handleColor() {
        const input = document.getElementById("colorPick").value;
        const body = document.querySelector("body");

        setColor(input);
        body.style.backgroundColor = input;
    }

    return (
        <>
            <h1>I am color picker</h1>
            <input onChange={handleColor} id="colorPick" type="color" />
        </>
    );
}

export default ColorPicker;
