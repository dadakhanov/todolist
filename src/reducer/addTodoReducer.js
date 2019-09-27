

export const addTodoReducer = (state = "", action) => {    
    if (action.type === "SET_ADDTODO_TEXT") {
        return action.todoText 
    }
    return state
}