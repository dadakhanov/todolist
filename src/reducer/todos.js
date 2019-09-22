
const initialState = [
    {id:0, text: "first task", completed: false},
    {id:1, text: "second task", completed: true},
    {id:2, text: "third task", completed: false}    
]

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':            
            return [
                ...state,
                {
                    id: state.length,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':            
            return state.map(todo =>
                    todo.id === action.id
                        ? { ...todo, completed: !todo.completed }
                        : todo
                )            
        default:
            return state;
    }
}

