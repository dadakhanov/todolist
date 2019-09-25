import React from 'react'
import {connect} from 'react-redux'
import { setDataChanged } from '../../actions'
import { searchAction } from '../../actions/search-actions'
import AddTodo from "./AddTodo";
import axios from "axios";
import { setAddTodoText } from '../../actions/todo-actions';

class AddTodoContainer extends React.Component {
    constructor(props){
        super(props)
        this.postTodoWithAdd.bind(this)
    }

    postTodoWithAdd = text => {
        console.log("axios POST add todo" + text)
        console.log(this.props.apiUrl)
        axios.post(this.props.apiUrl,{text})
            .then(resp => {
                console.log("postTodoWithAdd " + text)
                console.log(resp)
                this.props.setAddTodoText("")
                this.props.setDataChanged()                
            })
    }

    render() {
        return <AddTodo
            addTodo={this.postTodoWithAdd}
            //search={this.props.search}
            textAddTodo={this.props.textAddTodo}
            setAddTodoText={this.props.setAddTodoText}
            textToSearch={this.props.textToSearch}

        />
    }
}


const mapStateToProps = state => {
    return {
        textToSearch: state.searchBar.textToSearch,
        apiUrl: state.settings.apiUrl +state.settings.apiTodos,
        textAddTodo: state.textAddTodo
    }
}

const mapDispatchToProps = dispatch => ({
    setDataChanged: () => dispatch(setDataChanged()),
    search: text => dispatch(searchAction(text)),
    setAddTodoText: todoText => dispatch(setAddTodoText(todoText))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoContainer )