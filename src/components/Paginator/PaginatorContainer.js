import React from 'react'
import {connect} from "react-redux";
import Paginator from "./Paginator";
import {navigate} from "../../actions/navigatorActions";

const PaginatorContainer = ({navigator, navigate, serverElementsTotalCount}) => {

    function moveLeft() {
        navigate(navigator.tab, navigator.page - 1)
    }

    function moveRight() {
        navigate(navigator.tab, navigator.page + 1)
    }

    const pageCount = Math.ceil(serverElementsTotalCount / navigator.pageSize)

    return (
        <Paginator moveLeft={moveLeft} pageCount={pageCount}
                   currentPage={pageCount === 0 ? 0 : navigator.page + 1}
                   moveRight={moveRight}/>
    )
}

const mapStateToProps = (state) => {
    return {
        navigator: state.navigator,
        serverElementsTotalCount: state.todoList.serverTotalCount
    }
}

export default connect(mapStateToProps, {navigate})(PaginatorContainer)
