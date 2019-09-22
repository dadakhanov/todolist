
const initialState = [
    {
        "id": "5d8770d84ea42b9fb9131a13",
        "text": "Ingram Mills",
        "completed": false
      },
      {
        "id": "5d8770d89caf1667f7159728",
        "text": "Barbara Romero",
        "completed": true
      },
      {
        "id": "5d8770d8f068712b296ec5b5",
        "text": "Gaines Kennedy",
        "completed": true
      },
      {
        "id": "5d8770d86ab51c1e5ad11c01",
        "text": "Cristina Mejia",
        "completed": false
      },
      {
        "id": "5d8770d8571791aba19dbf27",
        "text": "Melton Downs",
        "completed": true
      },
      {
        "id": "5d8770d8e4940ae68dd88ea2",
        "text": "Ruby Dean",
        "completed": false
      },
      {
        "id": "5d8770d8137fe7bd74b534e3",
        "text": "Guy Hunt",
        "completed": true
      },
      {
        "id": "5d8770d83d6bd4050af58730",
        "text": "Jocelyn Donaldson",
        "completed": false
      },
      {
        "id": "5d8770d820cb9a580e5668a4",
        "text": "Kitty Stevens",
        "completed": true
      },
      {
        "id": "5d8770d8cbbfe9928594b2fb",
        "text": "Cardenas Burch",
        "completed": false
      },
      {
        "id": "5d8770d8a492265f9357e5fb",
        "text": "Penny Johns",
        "completed": false
      }   
]

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':            
            return [
                ...state,
                {
                    id: state.length,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':            
            return state.map(todo =>
                    todo.id === action.id
                        ? { ...todo, completed: !todo.completed }
                        : todo
                )            
        default:
            return state;
    }
}

