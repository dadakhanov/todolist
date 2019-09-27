import {visibilityFilters} from "../visibilitiFilters";

const initialState = visibilityFilters.SHOW_ACTIVE

export function visibilityFilterReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.visibilityFilter
        default:
            return state
    }

}