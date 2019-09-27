import { todosReducer } from "./todolistReducer";
import { combineReducers } from "redux";
import { settingsReducer } from "./settingsReducer";
import { addTodoReducer } from "./addtodoReducer";
import { visibilityFilterReducer } from "./visibilityFilterReducer";

export default combineReducers({
    todoList: todosReducer,    
    settings: settingsReducer,
    textAddTodo: addTodoReducer,
    visibilityFilter: visibilityFilterReducer
})

