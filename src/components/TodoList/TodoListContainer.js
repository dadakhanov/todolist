import React from 'react'
import {connect} from 'react-redux'
import {saveTodo, setTodos, toggleTodo} from '../../actions/todo-actions'
import {visibilityFilters} from '../../visibilitiFilters'
import TodoList from "./TodoList";
import axios from 'axios'

class TodoListContainer extends React.Component {

    constructor(props) {
        super(props)
        this.postTodoWithToggle.bind(this)
    }




    componentDidMount() {
        console.log("axios GET ")
        //debugger
        console.log(this.props.apiUrl)
        axios.get(this.props.apiUrl)
            .then(res => {
                this.props.setTodos(res.data)

                console.log(res)
            })

    }

    postTodoWithToggle = (todo) => {
        console.log("axios PUT postTodoWithToggle")
        console.log(this.props.apiUrl)

        console.log("togle todo " + todo.id)
        todo.completed = !todo.completed
        axios.put(this.props.apiUrl + todo.id,
            todo)
            .then(resp => {
                console.log("posting data")
                console.log(resp.data)
                this.props.saveTodo(resp.data)
            })

    }


    render() {
        return (
            <TodoList todoList={this.props.todoList}
                      toggleTodo={this.postTodoWithToggle}
            />

        )
    }
}

const mapStateToProps = (state, ownProps) => {
    //console.log("mapStateToProps from Todolist")

    let visibilityFilter = todo => {
        switch (ownProps.filter) {
            case visibilityFilters.SHOW_ACTIVE:
                return !todo.completed
            case visibilityFilters.SHOW_COMPLETED:
                return todo.completed
            default:
                return true
        }
    }

    let searchTextFilter = (srchTxt, todo) => {
        if (srchTxt === "")
            return true
        else
            return todo.text.toLowerCase().includes(srchTxt.toLowerCase())
    }

    //debugger

    const searchText = state.searchBar.textToSearch
    //debugger
    return {
        todoList: state.todoList.filter(todo =>
            visibilityFilter(todo) && searchTextFilter(searchText, todo)
        ),
        apiUrl: state.settings.apiUrl
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleTodo: id => {
            dispatch(toggleTodo(id))
        },
        setTodos: todos => dispatch(setTodos(todos)),
        saveTodo: todo => dispatch(saveTodo(todo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer)