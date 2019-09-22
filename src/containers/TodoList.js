import React from 'react'
import {connect} from 'react-redux'
import Todo from '../components/Todo'
import { toggleTodo } from '../actions/todo-actions'
import { visibilityFilters } from '../visibilitiFilters'

const TodoList = props => {            
    
    return (
        <div>
            {props.todoList.map( todo =>
                <Todo {...todo}
                    toggleTodo={ () => props.onClickItem(todo.id)} 
                    key={todo.id}
                    />
            )}
        </div>
    )


}

const mapStateToProps = (state, ownProps) => {        
    
    switch (ownProps.filter){
        case visibilityFilters.SHOW_ACTIVE:
            return {todoList: state.todoList.filter(t=> !t.completed)}
        case visibilityFilters.SHOW_COMPLETED:
            return {todoList: state.todoList.filter(t=> t.completed)}        
        default:
            return {todoList: state.todoList}
    }    
}

const mapDispatchToProps = dispatch => {
    return {        
        onClickItem: id => {dispatch(toggleTodo(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)