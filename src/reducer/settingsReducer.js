//apiUrl: "http://mobile.iceberry.ru:8095/"
//apiUrl: "http://host1072:9050/api/todos"
//const initialState = {    apiUrl: "http://host1072:9050/api/todos/"}
const initialState = {    
    apiUrl: "http://mobile.iceberry.ru:8095/api/",
    apiTodos: "todos/",
    dataChangedCounter: 0
}
//const initialState = {    apiUrl: "/api/todos/"}

export const settingsReducer = (state = initialState, action) => {

    switch (action.type){
        case 'SET_DATA_CHANGED':                                      
            return {                
                ...state,
                dataChangedCounter: state.dataChangedCounter + 1
            }
        default:
            return state
    }    
}