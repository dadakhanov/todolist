import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { saveTodo, setTodos } from '../../actions/todoActions'
import { setDataChanged } from '../../actions'
import TodoList from "./TodoList";
import axios from 'axios'
import Pagination from '../Pagination/Pagination';

function TodoListContainer({ apiUrl, setTodos, saveTodo, todoList, visibilityFilter
                            , dataChangedCounter,setDataChanged, serverTotalCount }){
    const pageSize = 7
    const [pageOffset, setPageOffset] = useState(0)

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
    },[ dataChangedCounter, visibilityFilter, apiUrl, pageOffset, pageSize, setDataChanged, setTodos])
  
    const postTodoWithToggle = (todo) => {
        console.log("PUT " + apiUrl + todo.id)
        axios
            .put(apiUrl + todo.id, { ...todo, completed: !todo.completed })
            .then(resp => {
                console.log(resp.status)
                setDataChanged()
                saveTodo(resp.data)
            })

    }

    const switchPage = pageIndex => {
        console.log("switchpage " + pageIndex)
        setPageOffset(pageIndex - 1)
    }

    const pageCount = Math.ceil( serverTotalCount / pageSize)
    
    return <div>
        <Pagination 
            currentPage={pageOffset+1} 
            pageCount={pageCount}
            pageMax={7}
            switchPage={switchPage} />    
        <TodoList todoList={todoList} toggleTodo={postTodoWithToggle} />            
    </div>
}

const mapStateToProps = (state, ownProps) => {        
    return {
        todoList: state.todoList.data,
        apiUrl: state.settings.apiUrl + state.settings.apiTodos,
        visibilityFilter: ownProps.filter,
        dataChangedCounter: state.todoList.dataChangedCounter,
        serverTotalCount: state.todoList.serverTotalCount
    }
}

export default connect(mapStateToProps
    , {setTodos, saveTodo, setDataChanged})(TodoListContainer)