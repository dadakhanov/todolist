
const initialState = {
    data: [],
    serverTotalCount: 0,
    dataChangedCounter: 0 //subscribe to changes
}

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TODOS':
            return {
                ...state,
                data: action.todoList,
                serverTotalCount: action.serverTotalCount                
            }
        case 'SAVE_TODO':
            return {
                ...state,
        //        dataChangedCounter: state.dataChangedCounter + 1,
                data: state.data.map(todo =>
                    todo.id === action.todo.id
                        ? { ...todo, text: action.todo.text, completed: action.todo.completed }
                        : todo
                )
            }
        case 'SET_DATA_CHANGED':
            return {
                ...state,
                dataChangedCounter: state.dataChangedCounter + 1
            }

        default:
            return state;
    }
}
