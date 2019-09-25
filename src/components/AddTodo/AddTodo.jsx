import React from 'react'
import styles from './AddTodo.module.css'

export default function AddTodo({addTodo,textAddTodo,setAddTodoText}){
    let input;

    return (
        <div className={styles.AddTodo}>
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

