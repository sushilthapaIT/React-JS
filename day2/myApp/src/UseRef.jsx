import React, { useState, useEffect, useRef } from "react";

function UseRef() {
    const inputRef = useRef(null);
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);

    useEffect(() => {
        console.log("Component Rendered");
    }, []);

    function handleClick() {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "yellow";
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
    }

    function handleClick2() {
        inputRef1.current.focus();
        inputRef.current.style.backgroundColor = "";
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
    }

    function handleClick3() {
        inputRef2.current.focus();
        inputRef.current.style.backgroundColor = "";
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "yellow";
    }

    return (
        <div>
            <button onClick={handleClick}>Click Me!</button>
            <input ref={inputRef} />

            <button onClick={handleClick2}>Click Me 2!</button>
            <input ref={inputRef1} />

            <button onClick={handleClick3}>Click Me 3!</button>
            <input ref={inputRef2} />
        </div>
    );
}

export default UseRef;
