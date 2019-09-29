import {setCurrentPage} from "./todoActions"

export const setFilter = (filter) => {
    return {
        type: "SET_FILTER",
        filter
    }
}

export const setFilterThunk = filter => dispatch => {
    dispatch(setFilter(filter))
    dispatch(setCurrentPage(0))
    sessionStorage.setItem("lastTab", filter)
    sessionStorage.setItem("lastPage", "0")
}