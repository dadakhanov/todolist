import React from 'react'

const Todo = ({ text, completed, toggleTodo }) => {
    return (
        <div onClick={toggleTodo}
            style={
                completed ? { color: "red" } : {}
            }
        >
            {text}
        </div>
    )
}

export default Todo