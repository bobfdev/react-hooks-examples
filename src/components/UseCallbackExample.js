import React, { useState, useCallback } from 'react'

function UseCallbackExample() {
    const [tasks, setTasks] = useState([])

    const addTask = useCallback(() => {
        setTasks((prevState) => [...prevState, 'Some Task'])
    }, [setTasks])
        

    const Button = React.memo(({ addTask }) => {
        console.log('Button rendered');

        return (
            <div>
                <button 
                    onClick={addTask}
                    className="btn btn-primary"
                >
                Add Task
                </button>
            </div>
        )
    })
    

    return (
        <div>   
            <Button addTask={addTask} />
            {tasks.map((task, index) => (
                <p key={index}>{task}</p>
            ))}
        </div>
    )
}


export default UseCallbackExample