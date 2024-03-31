// click event = An interaction when a user clicks on a specific element.
//              We can respond to clicks by passing
//              a callback to the onClick event handler.


function ClickEvent() {

    // const handleClick = (name) => console.log(`${name} ouch dont click me`)

    let count = 0;

    const handleClick = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} you clicked me ${count} times`)
        }
        else{
            console.log(`${name} stop clicking me!`)
        }
    };

    return(<>
    <button onClick={handleClick}>Click Me</button>
    </>);   
}

export default ClickEvent