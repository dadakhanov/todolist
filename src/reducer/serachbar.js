const initialState = {
    textToSearch: ""
}

export const searchBarReducer = (state = initialState, action) => {
    if (action.type === "SEARCH"){
        return {
            textToSearch: action.textToSearch
        }

    }

    return state

}