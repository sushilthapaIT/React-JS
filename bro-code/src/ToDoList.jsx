import React, {useState} from "react"

function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setTasks(event.target.value);
    }

     
    return(<>
        <div className="to-do-list">
            <h1>To-Do-List</h1>

            <div>
                <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange}/>

                <button className="add-button" onClick={addTasks}></button>
            </div>
        </div>
    </>);
}

export default ToDoList