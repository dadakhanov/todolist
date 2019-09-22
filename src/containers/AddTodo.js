import React from 'react'
import {connect} from 'react-redux'
import { addTodo } from '../actions/todo-actions'

const AddTodo = props => {
    let input;    

    return (
        <div>
            <input ref ={ref => input = ref} />
            <button onClick={ () => {
                props.addTodo(input.value)
                input.value = ""
            }}>add todo</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addTodo: text => dispatch(addTodo(text))
    }
}

export default connect(null, mapDispatchToProps)(AddTodo)