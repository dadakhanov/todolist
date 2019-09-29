import React from 'react'
import {connect} from 'react-redux'
import AddTodo from "./AddTodo"
import {addTodoThunk, setAddTodoText} from '../../actions/todoActions'

function AddTodoContainer(props) {
    const {addTodoThunk, filter, pageSize, currentPage} = props

    function addTodo(text) {
        addTodoThunk(text, filter, pageSize, currentPage)
    }

    const {textAddTodo, setAddTodoText} = props
    return (
        <AddTodo
            addTodo={addTodo}
            textAddTodo={textAddTodo}
            setAddTodoText={setAddTodoText}
        />
    )
}

const mapStateToProps = state => {
    return {
        textAddTodo: state.textAddTodo,
        pageSize: state.todoList.pageSize,
        currentPage: state.todoList.currentPage,
        filter: state.filter
    }
}

export default connect(mapStateToProps,
    {
        setAddTodoText,
        addTodoThunk
    })(AddTodoContainer)