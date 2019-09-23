
export const todosReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':            
            return [
                ...state,
                action.todo
            ]
        case 'TOGGLE_TODO':            
            return state.map(todo =>
                    todo.id === action.id
                        ? { ...todo, completed: !todo.completed }
                        : todo
                )
        case 'SET_TODOS':
            console.log(action.todoList)
            return action.todoList
        case 'SAVE_TODO':
            console.log(action.todo)
            return state.map(todo =>
                todo.id === action.id
                    ? { ...todo, text: todo.text, completed: todo.completed }
                    : todo
            )

        default:
            return state;
    }
}


/*

    {
        "id": 0,
        "text": "667 Lamont Court, Barstow, Kansas, 7183",
        "completed": false
      },
      {
        "id": 1,
        "text": "847 Varet Street, Linganore, Rhode Island, 6969",
        "completed": false
      },
      {
        "id": 2,
        "text": "938 Stockholm Street, Lowell, Georgia, 5969",
        "completed": false
      },
      {
        "id": 3,
        "text": "713 Hart Street, Ogema, Missouri, 125",
        "completed": false
      },
      {
        "id": 4,
        "text": "666 Pineapple Street, Ventress, Delaware, 888",
        "completed": true
      },
      {
        "id": 5,
        "text": "840 Fulton Street, Cannondale, South Carolina, 2480",
        "completed": false
      },
      {
        "id": 6,
        "text": "122 Varick Street, Barronett, New Hampshire, 6733",
        "completed": false
      },
      {
        "id": 7,
        "text": "831 Blake Avenue, Selma, Wyoming, 2198",
        "completed": true
      },
      {
        "id": 8,
        "text": "725 Jerome Avenue, Orovada, Mississippi, 6719",
        "completed": true
      },
      {
        "id": 9,
        "text": "928 Dare Court, Marshall, Tennessee, 5962",
        "completed": true
      },
      {
        "id": 10,
        "text": "128 Seton Place, Freeburn, Maine, 8677",
        "completed": false
      },
      {
        "id": 11,
        "text": "191 Clifton Place, Heil, Maryland, 2458",
        "completed": true
      },
      {
        "id": 12,
        "text": "120 Humboldt Street, Haena, North Carolina, 5960",
        "completed": true
      },
      {
        "id": 13,
        "text": "778 Johnson Avenue, Williston, Indiana, 8468",
        "completed": true
      },
      {
        "id": 14,
        "text": "622 McClancy Place, Rowe, Northern Mariana Islands, 8462",
        "completed": false
      },
      {
        "id": 15,
        "text": "992 Lynch Street, Nettie, Arkansas, 2240",
        "completed": false
      }
 */