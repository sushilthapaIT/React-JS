// onChange = event handler used primarily with form elements
//             ex. <input>, <textarea>, <select>, <radio>

import React, { useState } from "react";


function onChange() {

    const [name, setName] = useState("");

    function handleNameChange(event){
        setName(event.target.value);
    }



    return(
        <>
        <input value={name} onChange={handleNameChange}/>
        <p>Name: {name}</p>

        </>
    );
}

export default onChange