import { todosReducer } from "./todolistReducer";
import { combineReducers } from "redux";
import { settingsReducer } from "./settingsReducer";
import { addTodoReducer } from "./addtodoReducer";
import { navigatorReducer } from "./navigatorReducer";

export default combineReducers({
    todoList: todosReducer,    
    settings: settingsReducer,
    textAddTodo: addTodoReducer,
    navigator: navigatorReducer
})

