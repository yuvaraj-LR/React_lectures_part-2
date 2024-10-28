import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions"

const INITIAL_STATE = {
    todos: [
        {
            id: 1,
            text: "Redux at 9AM",
            completed: true
        },
        {
            id: 2,
            text: "Lunch at 2PM",
            completed: false
        },
    ]
}

export const todoReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: state.todos.length + 1,
                        text: action.text,
                        completed: false
                    }
                ]
            }

        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, i) => {
                    if (i === action.index) {
                        todo.completed = !todo.completed;
                    }

                    return todo;
                })
            }

        default:    
            return state;
    }
}