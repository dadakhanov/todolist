export const todosReducer = (state = [], action) => {
    switch (action.type) {        
        case 'SET_TODOS':
            return action.todoList
        case 'SAVE_TODO':
            return state.map(todo =>
                todo.id === action.todo.id
                    ? { ...todo, text: action.todo.text, completed: action.todo.completed }
                    : todo
            )

        default:
            return state;
    }
}
