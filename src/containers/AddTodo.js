import React from 'react'
import {connect} from 'react-redux'
import { addTodo } from '../actions/todo-actions'
import { searchAction } from './../actions/search-actions'

const AddTodo = ({textToSearch,search,addTodo}) => {
    let input;    

    return (
        <div>
            <input ref ={ref => input = ref} 
                onChange={()=>search(input.value)}
                value={textToSearch} 
                placeholder={"search/new"}

            />
            <button onClick={ () => {
                addTodo(input.value)
                search("")
            }}>add todo</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addTodo: text => dispatch(addTodo(text)),
    search: text => dispatch(searchAction(text))
})

const mapStateToProps = state => {
    return {
        textToSearch: state.searchBar.textToSearch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)