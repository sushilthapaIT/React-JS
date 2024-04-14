import React, {useState, useEffect} from 'react'

function AddList(){

    const [count, setCount] = useState(0);

    function increaseCount(){
        setCount(c => c + 1);
    }

    // // useEffect(() => {
    // //     alert("always running")
    // // })
    // useEffect(()=> {
    //     alert(` ${count} runnning when count increase` )
    // }, [increaseCount])

    const [task, setList] = useState(["apple", "banana", "mango"]);

    function addTask(){
        const newFood = document.getElementById("inputFood").value;
        setList(t => [...t, newFood])
    }


    return(<>
        <div className='forCount'>
            <h2>Counter</h2>
            <span>{count}</span>
            <button onClick={increaseCount}>Increase</button>
        </div>

        <div className='addList'>
            <h2>Add List</h2>
            <ul>
                {task.map((e, i) => <li key={i}>{e}</li>)}
            </ul>

            <input id='inputFood' />
            <button onClick={addTask}>
                Add
            </button>
        </div>
    </>);
}

export default AddList