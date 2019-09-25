import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { saveTodo, setTodos } from '../../actions/todo-actions'
import { setDataChanged } from '../../actions'
import TodoList from "./TodoList";
import axios from 'axios'
import Pagination from '../Pagination/Pagination';

const TodoListContainer = ({ apiUrl, setTodos, saveTodo, todoList, visibilityFilter, dataChangedCounter,setDataChanged }) => {

    const pageSize = 8
    const [pageOffset, setPageOffset] = useState(0)
    const [totalCount, setTotalCount] = useState(0)        

    console.log("TodoListContainer: dataChangedCounter: " + dataChangedCounter)
    useEffect(() => {
        const loadTodos = () => {
            //debugger
            const url = apiUrl + "?filter=" + visibilityFilter
                + "&limit=" + pageSize
                + "&offset=" + pageOffset

            console.log("GET " + url)
            axios.get(url)
                .then(res => {
                    console.log(res.status)
                    //debugger                    
                    setTotalCount(res.data.totalElements)                    
                    setTodos(res.data.content)                                                            
                })
        }
        loadTodos()           
    },[dataChangedCounter, visibilityFilter, apiUrl, pageOffset, pageSize, setDataChanged, setTodos])
  
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

    const pageCount = Math.ceil( totalCount / pageSize)
    
    return <div>
        <TodoList todoList={todoList} toggleTodo={postTodoWithToggle} />
        <Pagination 
            currentPage={pageOffset+1} 
            pageCount={pageCount}
            pageMax={7}
            switchPage={switchPage} />    
    </div>
}

const mapStateToProps = (state, ownProps) => {        
    return {
        todoList: state.todoList,
        apiUrl: state.settings.apiUrl + state.settings.apiTodos,
        visibilityFilter: ownProps.filter,
        dataChangedCounter: state.settings.dataChangedCounter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setTodos: todos => dispatch(setTodos(todos)),
        saveTodo: todo => dispatch(saveTodo(todo)),
        setDataChanged: () => dispatch(setDataChanged())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer)