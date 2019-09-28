import React from 'react'
import {connect} from 'react-redux'
import { setDataChanged } from '../../actions'
import AddTodo from "./AddTodo";
import axios from "axios";
import { setAddTodoText } from '../../actions/todoActions';



class AddTodoContainer extends React.Component {
    constructor(props){
        super(props)
        this.postTodoWithAdd.bind(this)
    }

    postTodoWithAdd = text => {
        if (text==="")
            return
        console.log("POST " + this.props.apiUrl)
        axios.post(this.props.apiUrl,{text})
            .then(resp => {
                console.log(resp.status)
                this.props.setAddTodoText("")
                sessionStorage.setItem("addTodoText", "")
                this.props.setDataChanged()                
            })
    }

    render() {
        return <AddTodo
            addTodo={this.postTodoWithAdd}
            textAddTodo={this.props.textAddTodo}
            setAddTodoText={this.props.setAddTodoText}
        />
    }
}

const mapStateToProps = state => {
    return {
        apiUrl: state.settings.apiUrl +state.settings.apiTodos,
        textAddTodo: state.textAddTodo
    }
}

export default connect(mapStateToProps, {setDataChanged, setAddTodoText} )(AddTodoContainer )