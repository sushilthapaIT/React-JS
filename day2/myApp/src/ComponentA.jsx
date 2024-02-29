import React, {useState} from "react";
import ComponentB from "./ComponentC";

export const UserContext = createContext();

function ComponentA(){

    const [user, setUser] = useState("BroCode")
    return(
        <div className="boxy">
        <h4>ComponentA</h4>
        <h5>{`'Hello ${user}'`}</h5>
        <UserContext.Provider value={user}>
            <ComponentB user={user}/>
        </UserContext.Provider>
    </div>
    );

}

export default ComponentA