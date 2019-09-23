import { todosReducer } from "./todos";
import { combineReducers } from "redux";
import { searchBarReducer } from "./serachbar";
import {settingsReducer} from "./settingsReducer";

export default combineReducers({
    todoList: todosReducer,
    searchBar: searchBarReducer,
    settings: settingsReducer
})

