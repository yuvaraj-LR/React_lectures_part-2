// import { ADD_TODO, TOGGLE_TODO } from "../redux/actions/todoActions";
import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions"; 

// Intilize the state. 
const initialState = {
    todos: [
        {
            "text": "Go to Gym by 5PM.",
            "completed": false
        },
        {
            "text": "Start work from 11 AM",
            "completed": true
        }
    ]
};

export function todoReducer(state = initialState, action) {
    switch (action.type){
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            }
        
        case TOGGLE_TODO: 
            return {
                ...state,
                todos: state.todos.length > 0 ? state.todos.map((todo, i) => {
                    if(i === action.index) {
                        todo.completed = !todo.completed
                    }

                    return todo;
                }) : []
            }
        
        default:
            return state;
    }
}
