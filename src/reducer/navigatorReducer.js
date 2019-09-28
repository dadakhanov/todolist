import {navigationTabs} from "../actions/navigationTabs";

const lastTab = sessionStorage.getItem("lastTab")

const initialState = {
    tab: lastTab !== null ? lastTab : navigationTabs.ACTIVE,
    page: 0,
    pageSize: 10
}

export function navigatorReducer(state = initialState, action) {
    if (action.type === 'NAVIGATE') {
        return {
            ...state,
            tab: action.tab,
            page: action.page
        }
    }
    return state
}