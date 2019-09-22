import { todosReducer } from "./todos";
import { combineReducers } from "redux";
import { searchBarReducer } from "./serachbar";

export default combineReducers({
    todoList: todosReducer,
    searchBar: searchBarReducer
})


