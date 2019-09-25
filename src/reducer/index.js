import { todosReducer } from "./todos";
import { combineReducers } from "redux";
import { searchBarReducer } from "./serachbar";
import {settingsReducer} from "./settingsReducer";
import { addTodoReducer } from "./addTodoReducer";

export default combineReducers({
    todoList: todosReducer,
    searchBar: searchBarReducer,
    settings: settingsReducer,
    textAddTodo: addTodoReducer
})

