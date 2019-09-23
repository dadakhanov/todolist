const initialState = {
    textToSearch: ""
}

export const searchBarReducer = (state = initialState, action) => {
    if (action.type === "SEARCH") {
        console.log("search reducer called with " + action.textToSearch)
        return {
            textToSearch: action.textToSearch
        }

    }

    return state

}