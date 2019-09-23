import React from 'react'

const AddTodo = ({textToSearch,search,addTodo}) => {
    let input;

    return (
        <div>
            <input ref ={ref => input = ref}
                   onChange={()=>search(input.value)}
                   value={textToSearch}
                   placeholder={"search/new"}

            />
            <button onClick={ () => {
                addTodo(input.value)
                search("")
            }}>add todo</button>
        </div>
    )
}

export default AddTodo