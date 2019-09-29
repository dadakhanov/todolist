import {filters} from "../actions/filters"

const lastTab = sessionStorage.getItem("lastTab")

const initialState = lastTab !== null ? lastTab : filters.ACTIVE

export const filterReducer = (state = initialState, action) => {
    if (action.type === "SET_FILTER") {
        return action.filter
    }
    return state
}

