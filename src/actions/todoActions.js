export const setTodos = (todos, serverTotalCount) => {
    return {
        type: 'SET_TODOS',
        todoList: todos,
        serverTotalCount
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