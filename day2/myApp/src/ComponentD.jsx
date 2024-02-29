import React, {useContext} from "react";
import { UserContext } from "./ComponentA";

function ComponentD(){

    const user = useContext(UserContext)
    return(
        <div className="boxy">
        <h4>ComponentD</h4>
        <h5>{`Bye`}</h5>
    </div>
    );

}

export default ComponentD