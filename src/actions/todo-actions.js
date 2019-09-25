export const setTodos = todos => {
    return {
        type: 'SET_TODOS',
        todoList: todos
    }
}

export const saveTodo = todo => {
    return{
        type: 'SAVE_TODO',
        todo
    }
}

export const setAddTodoText = todoText => {
    return {
        type: "SET_ADDTODO_TEXT",
        todoText
    }
}