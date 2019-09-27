import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {saveTodo, setTodos} from '../../actions/todoActions'
import {setDataChanged} from '../../actions'
import TodoList from "./TodoList";
import axios from 'axios'
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

function TodoListContainer({
                               apiUrl, setTodos, saveTodo, todoList, visibilityFilter
                               , dataChangedCounter, setDataChanged, serverTotalCount
                           }) {



    console.log(visibilityFilter)
    const pageSize = 5
    const [pageOffset, setPageOffset] = useState(0)
    //const [pageOffset] = useState(0)

    useEffect(() => {
        const loadTodos = () => {
            const url = apiUrl + "?filter=" + visibilityFilter
                + "&limit=" + pageSize
                + "&offset=" + pageOffset

            console.log("GET " + url)
            axios.get(url)
                .then(res => {
                    console.log(res.status)
                    setTodos(res.data.content, res.data.totalElements)
                })
        }
        loadTodos()
    }, [dataChangedCounter, visibilityFilter, apiUrl, pageOffset, pageSize, setDataChanged, setTodos])

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
    /*
        const switchPage = pageIndex => {
            console.log("switchpage " + pageIndex)
            setPageOffset(pageIndex - 1)
        }

        const pageCount = Math.ceil( serverTotalCount / pageSize)
      */

    const pageCount = Math.ceil( serverTotalCount / pageSize)
    console.log(pageCount)

    function moveLeft() {
        setPageOffset(pageOffset - 1)
    }

    function moveRight() {
        setPageOffset(pageOffset + 1)
    }

    return <div>
        <Grid container alignItems="flex-start" justify="flex-end" direction="row">
            <Button onClick={moveLeft}  disabled={pageOffset===0}>PREVIOUS</Button>
            <Button onClick={moveRight} disabled={pageCount===pageOffset+1} >NEXT</Button>
        </Grid>
        <TodoList todoList={todoList} toggleTodo={postTodoWithToggle}
                  deleteTodo={postTodoWithDelete}
        />




    </div>
}

const mapStateToProps = (state) => {
    return {
        todoList: state.todoList.data,
        apiUrl: state.settings.apiUrl + state.settings.apiTodos,
        visibilityFilter: state.visibilityFilter,
        dataChangedCounter: state.todoList.dataChangedCounter,
        serverTotalCount: state.todoList.serverTotalCount
    }
}

export default connect(mapStateToProps,
    {setTodos, saveTodo, setDataChanged})(TodoListContainer)


/*
  <Pagination
        currentPage={pageOffset+1}
        pageCount={pageCount}
        pageMax={5}
        switchPage={switchPage} />
        */