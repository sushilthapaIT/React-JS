// React hook = Special function that allows functional components to use
//              React features without writing class components
//              (useState, useEffect, useContext, useReducer, useCallback)


// useState() = A React hook that allows the creation of a stateful variable and a setter
//              function to update its value in the Virtual DOM.
//              [name, setName]

import React, {useState} from "react";

function ReactHook(){

    const [name, setName] = useState("Guest");

    const updateName = () => {
        setName("Sushil")
    }

    const [age, setAge] = useState(0);

    const incrementAge = () => {
        setAge(age + 1);
    }

    const [isEmployed, setIsEmployed] = useState(false);

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return(
        <>
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>Toggle Status</button>


        </div>
        </>
    );
}

export default ReactHook

