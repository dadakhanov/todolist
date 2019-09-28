
const addTodoText = sessionStorage.getItem("addTodoText")

const initialState = addTodoText !== null ? addTodoText : ""

export const addTodoReducer = (state = initialState, action) => {
    if (action.type === "SET_ADDTODO_TEXT") {
        return action.todoText 
    }
    return state
}