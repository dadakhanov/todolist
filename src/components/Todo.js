import React from 'react'
import './Todo.css'

const Todo = ({ text, completed, toggleTodo }) => {
    return (
        <div className={"todo" + (completed ? " completed" : "")} onClick={toggleTodo}
            
        >
            {text}
        </div>
    )
}

export default Todo