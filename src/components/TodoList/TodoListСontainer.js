import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {deleteTodoThunk, getTodosThunk, saveTodoThunk} from '../../actions/todoActions'
import TodoList from "./TodoList"

function TodoListContainer({todoList, filter, currentPage, pageSize, getTodosThunk, saveTodoThunk, deleteTodoThunk}) {

    useEffect(() => {
        getTodosThunk(filter, pageSize, currentPage)
    }, [getTodosThunk, filter, pageSize, currentPage])

    const toggleTodo = (todo) => {
        saveTodoThunk({...todo, completed: !todo.completed}, filter, pageSize, currentPage)
    }

    const deleteTodo = id => {
        deleteTodoThunk(id, filter, pageSize, currentPage)
    }

    return (
        <div>
            <TodoList todoList={todoList} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todoList: state.todoList.data,
        filter: state.filter,
        currentPage: state.todoList.currentPage,
        pageSize: state.todoList.pageSize
    }
}

export default connect(mapStateToProps,
    {
        getTodosThunk,
        saveTodoThunk,
        deleteTodoThunk
    })(TodoListContainer)


