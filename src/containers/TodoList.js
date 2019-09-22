import React from 'react'
import {connect} from 'react-redux'
import Todo from '../components/Todo'
import { toggleTodo } from '../actions/todo-actions'
import { visibilityFilters } from '../visibilitiFilters'

const TodoList = props => {            
    return (
        <div className="todolist">
            {props.todoList
                .sort( (a,b) => b.id - a.id)
                .map( todo =>
                <Todo {...todo}
                    toggleTodo={ () => props.onClickItem(todo.id)} 
                    key={todo.id}
                    />
            )}
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {      
    console.log("mapStateToProps from Todolist")  
    
    let visibilityFilter = todo =>{
        switch (ownProps.filter){
            case visibilityFilters.SHOW_ACTIVE:
                return !todo.completed
            case visibilityFilters.SHOW_COMPLETED:
                return todo.completed
            default:
                return true
        }        
    }

    let searchTextFilter = (srchTxt,todo) =>{
        if (srchTxt==="")
            return true
        else
            return todo.text.toLowerCase().includes(srchTxt.toLowerCase())
    }

    const searchText = state.searchBar.textToSearch
    return {
        todoList: state.todoList.filter( todo =>
            visibilityFilter(todo) && searchTextFilter(searchText,todo)
            )
    } 
}

const mapDispatchToProps = dispatch => {
    return {        
        onClickItem: id => {dispatch(toggleTodo(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)