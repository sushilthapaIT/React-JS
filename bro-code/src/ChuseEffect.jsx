import React, {useState, useEffect} from "react";

function ChuseEffect() {

    useEffect(() => {
        document.title = "Use Effect"
        alert("Welcome to my page")
    }, []);

    return(<>

        <h1>I am code harry useEffect</h1>
    </>);
}

export default ChuseEffect