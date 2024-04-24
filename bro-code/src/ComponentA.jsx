import React, { useState, createContext } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext();

function ComponentA(){

    const [user, setUser] = useState("Sushi")

    return(
        <>
            <div className="box">
                <h1>Component A</h1>
                <h2>{`Hello ${user}`}</h2>
                <ComponentB />
            </div>
        </>
    );
    
}

export default ComponentA