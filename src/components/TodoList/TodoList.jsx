import React from 'react'
import Todo from "../Todo/Todo";

export default function TodoList({toggleTodo, deleteTodo, todoList}) {
    return (
        <div>
            {todoList.map(todo => (
                <Todo {...todo}
                      toggleTodo={() => toggleTodo(todo)}
                      deleteTodo={() => deleteTodo(todo.id)}
                      key={todo.id}
                />
            ))}
        </div>
    )
}