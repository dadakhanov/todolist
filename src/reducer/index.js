import {combineReducers} from "redux"
import {todosReducer} from "./todolistReducer"
import {addTodoReducer} from "./addTodoReducer"
import {filterReducer} from "./filterReducer"

export default combineReducers({
    todoList: todosReducer,
    textAddTodo: addTodoReducer,
    filter: filterReducer
})

