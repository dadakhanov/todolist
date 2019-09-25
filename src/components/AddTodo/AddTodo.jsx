import React from 'react'

const AddTodo = ({textToSearch,search,addTodo,textAddTodo,setAddTodoText}) => {
    let input;

    return (
        <div>
            <input ref ={ref => input = ref}
                   placeholder={"new task..."}
                   value={textAddTodo}
                   onChange={()=>setAddTodoText(input.value)}
            />
            <button onClick={ () => {
                addTodo(input.value)                
            }}>add todo</button>
        </div>
    )
}

export default AddTodo