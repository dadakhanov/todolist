import React from 'react'
import {connect} from "react-redux"
import Paginator from "./Paginator"
import {setCurrentPageThunk} from "../../actions/todoActions"

const PaginatorContainer = ({currentPage, setCurrentPageThunk, serverElementsTotalCount, pageSize}) => {

    function moveLeft() {
        setCurrentPageThunk(currentPage - 1)
    }

    function moveRight() {
        setCurrentPageThunk(currentPage + 1)
    }

    const pageCount = Math.ceil(serverElementsTotalCount / pageSize)

    return (
        <Paginator moveLeft={moveLeft} pageCount={pageCount}
                   currentPage={pageCount === 0 ? 0 : currentPage + 1}
                   moveRight={moveRight}/>
    )
}

const mapStateToProps = (state) => {
    return {
        currentPage: state.todoList.currentPage,
        serverElementsTotalCount: state.todoList.serverTotalCount,
        pageSize: state.todoList.pageSize
    }
}

export default connect(mapStateToProps, {setCurrentPageThunk})(PaginatorContainer)
