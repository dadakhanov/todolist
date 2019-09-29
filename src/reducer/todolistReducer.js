const lastPage = sessionStorage.getItem("lastPage")

const initialState = {
    data: [],
    serverTotalCount: 0,
    currentPage: lastPage !== null ? parseInt(lastPage) : 0,
    pageSize: 4
}

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            }
        case 'SET_TODOS':
            return {
                ...state,
                data: action.todoList,
                serverTotalCount: action.serverTotalCount
            }
        case 'SAVE_TODO':
            return {
                ...state,
                data: state.data.map(todo =>
                    todo.id === action.todo.id
                        ? { ...todo, text: action.todo.text, completed: action.todo.completed }
                        : todo
                )
            }
        case 'SET_DATA_CHANGED':
            return {
                ...state
            }

        default:
            return state;
    }
}
