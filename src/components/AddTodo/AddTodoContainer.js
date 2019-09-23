import React from 'react'
import {connect} from 'react-redux'
import { addTodo } from '../../actions/todo-actions'
import { searchAction } from '../../actions/search-actions'
import AddTodo from "./AddTodo";
import axios from "axios";

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
                this.props.addTodo(resp.data)
            })



    }

    render() {
        return <AddTodo
            addTodo={this.postTodoWithAdd}
            search={this.props.search}
            textToSearch={this.props.textToSearch}

        />
    }
}


const mapStateToProps = state => {
    return {
        textToSearch: state.searchBar.textToSearch,
        apiUrl: state.settings.apiUrl
    }
}

const mapDispatchToProps = dispatch => ({
    addTodo: todo => dispatch(addTodo(todo)),
    search: text => dispatch(searchAction(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoContainer )