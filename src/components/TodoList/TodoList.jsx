import React from 'react'
import Todo from "../Todo/Todo";

export default function TodoList(props) {
    return  <div className="todolist">
        {props.todoList
            //.sort((a, b) => b.id - a.id)
            .map(todo =>
                <Todo {...todo}
                      toggleTodo={() => props.toggleTodo(todo)}
                      deleteTodo={() => props.deleteTodo(todo.id)}
                      key={todo.id}
                />                
                
            )}            
    </div>
}