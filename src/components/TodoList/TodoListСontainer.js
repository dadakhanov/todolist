import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {saveTodo, setTodos} from '../../actions/todoActions'
import {setDataChanged} from '../../actions'
import TodoList from "./TodoList";
import axios from 'axios'
import {navigate} from "../../actions/navigatorActions";

function TodoListContainer({apiUrl, setTodos, saveTodo, todoList, dataChangedCounter, setDataChanged, navigator}) {

    useEffect(() => {
        const loadTodos = () => {
            const url = `${apiUrl}?filter=${navigator.tab}&limit=${navigator.pageSize}&offset=${navigator.page}`
            console.log("GET " + url)
            axios.get(url)
                .then(resp => {
                    console.log(resp.status)
                    setTodos(resp.data.content, resp.data.totalElements)
                })
        }
        loadTodos()
    }, [dataChangedCounter, navigator, apiUrl, setDataChanged, setTodos])

    const postTodoWithToggle = (todo) => {
        console.log("PUT " + apiUrl + todo.id)
        axios
            .put(apiUrl + todo.id, {...todo, completed: !todo.completed})
            .then(resp => {
                console.log(resp.status)
                setDataChanged()
                saveTodo(resp.data)
            })

    }

    const postTodoWithDelete = (id) => {
        console.log("DELETE " + apiUrl + id)
        axios
            .delete(apiUrl + id)
            .then(resp => {
                console.log(resp.status)
                setDataChanged()
            })
    }

    return (
        <div>
            <TodoList todoList={todoList} toggleTodo={postTodoWithToggle}
                      deleteTodo={postTodoWithDelete}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todoList: state.todoList.data,
        apiUrl: state.settings.apiUrl + state.settings.apiTodos,
        navigator: state.navigator,
        dataChangedCounter: state.todoList.dataChangedCounter,
        serverTotalCount: state.todoList.serverTotalCount
    }
}

export default connect(mapStateToProps, {setTodos, saveTodo, setDataChanged, navigate})(TodoListContainer)


