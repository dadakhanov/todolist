import * as Api from "../api/todoApi"

export const setTodos = (todos, serverTotalCount) => {
    return {
        type: 'SET_TODOS',
        todoList: todos,
        serverTotalCount
    }
}

export const saveTodo = todo => {
    return {
        type: 'SAVE_TODO',
        todo
    }
}

export const setAddTodoText = todoText => {
    return {
        type: "SET_ADDTODO_TEXT",
        todoText
    }
}

export const setCurrentPage = currentPage => {
    return {
        type: 'SET_CURRENT_PAGE',
        currentPage
    }
}

export const setCurrentPageThunk = currentPage => dispatch => {
    dispatch(setCurrentPage(currentPage))
    sessionStorage.setItem("lastPage", currentPage)
}


export const getTodosThunk = (filter, pageSize, pageOffset) => dispatch => {
    Api.getTodos(filter, pageSize, pageOffset)
        .then(resp => {
            console.log("  " + resp.status)
            dispatch(setTodos(resp.data.content, resp.data.totalElements))
        })

}

export const saveTodoThunk = (todo, filter, pageSize, pageOffset) => dispatch => {
    Api.saveTodo(todo)
        .then(resp => {
            console.log("  " + resp.status)
            dispatch(saveTodo(resp.data))
            dispatch(getTodosThunk(filter, pageSize, pageOffset))
        })
}

export const deleteTodoThunk = (id, filter, pageSize, pageOffset) => dispatch => {
    Api.deleteTodo(id)
        .then(resp => {
            console.log("  " + resp.status)
            dispatch(getTodosThunk(filter, pageSize, pageOffset))
        })
}

export const addTodoThunk = (text, filter, pageSize, pageOffset) => dispatch => {
    Api.addTodo(text)
        .then(resp => {
            console.log("  " + resp.status)
            dispatch(setAddTodoText(""))
            dispatch(getTodosThunk(filter, pageSize, pageOffset))
            sessionStorage.setItem("addTodoText", "")
        })
}