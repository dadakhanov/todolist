import {navigationTabs} from "../actions/navigationTabs";

const initialState = {
    tab: navigationTabs.ACTIVE,
    page: 0
}

export function navigatorReducer(state = initialState, action) {
    switch (action.type) {
        case 'NAVIGATE':
            return {
                tab: action.tab,
                page: action.page
            }
        default:
            return state
    }

}