export const addTodo = todo => {
    return {
        type: 'ADD_TODO',
        todo
    }
}

export const toggleTodo = id => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}

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