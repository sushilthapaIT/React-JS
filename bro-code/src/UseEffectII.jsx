import React, {useState, useEffect} from "react";

function UseEffectII() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    // window.addEventListener("resize", () => {
    //     setWidth(window.innerWidth);
    //     setHeight(window.innerHeight);
    //     console.log("Event listener added")
    // })

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        console.log("Event listener added")

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("Event listener removed")
        }

    }, []);

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`
    }, [width, height]);

    window.addEventListener("resize", handleResize);


    return(<>
    <p>Window Width: {width}px</p>
    <p>Window Height: {height}px</p>
    </>);
}

export default UseEffectII