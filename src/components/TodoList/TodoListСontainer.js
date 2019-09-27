import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {saveTodo, setTodos} from '../../actions/todoActions'
import {setDataChanged} from '../../actions'
import TodoList from "./TodoList";
import axios from 'axios'
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {navigate} from "../../actions/navigatorActions";

function TodoListContainer({apiUrl, setTodos, saveTodo, todoList, dataChangedCounter, setDataChanged, serverTotalCount, navigator, navigate}) {
    const pageSize = 10

    useEffect(() => {
        const loadTodos = () => {
            const url = apiUrl + "?filter=" + navigator.tab
                + "&limit=" + pageSize
                + "&offset=" + navigator.page

            console.log("GET " + url)
            axios.get(url)
                .then(res => {
                    console.log(res.status)
                    setTodos(res.data.content, res.data.totalElements)
                })
        }
        loadTodos()
    }, [dataChangedCounter, navigator, apiUrl, pageSize, setDataChanged, setTodos])

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

    const pageCount = Math.ceil(serverTotalCount / pageSize)

    function moveLeft() {
        navigate(navigator.tab, navigator.page - 1)
    }

    function moveRight() {
        navigate(navigator.tab, navigator.page + 1)
    }

    return (
        <div>
            <Grid container alignItems="flex-start" justify="flex-end" direction="row">
                <Button onClick={moveLeft} disabled={navigator.page === 0}>NEWER</Button>
                <Button onClick={moveRight} disabled={pageCount === navigator.page + 1 || pageCount === 0}>OLDER</Button>
            </Grid>
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

export default connect(mapStateToProps,
    {setTodos, saveTodo, setDataChanged, navigate})(TodoListContainer)


