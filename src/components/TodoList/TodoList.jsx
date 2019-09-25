import React from 'react'
import Todo from "../Todo/Todo";

export default function TodoList(props) {
    return  <div className="todolist">
        {props.todoList
            //.sort((a, b) => b.id - a.id)
            .map(todo =>
                <Todo {...todo}
                      toggleTodo={() => props.toggleTodo(todo)}
                      key={todo.id}
                />
                
            )}            
    </div>
}