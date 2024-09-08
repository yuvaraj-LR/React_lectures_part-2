const redux = require("redux");

// Actions
const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

// Action Creators
const addTodo = (text) => ({type: ADD_TODO, text});
const toggleTodo = (text) => ({type: TOGGLE_TODO, text});

// Intilize state 
const initialState = {
    todo: []
}

// Reducers
function todoReducer(state=initialState, action) {
    switch(action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: state ?? [
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
                todos: state ?? state.todos.map((todo, i) => {
                    if (i === action.index) {
                        todo.completed = !todo.completed
                    }

                    return todo;
                })
            }

        default:
            return state;
    }
}

// Creating Stores
const store = redux.createStore(todoReducer);

// Dispatch the actions.
store.dispatch(addTodo("Wake up by 6:30 AM"));
store.dispatch(addTodo("Breakfast by 8:30 AM"));
store.dispatch(addTodo("Office by 10:30 AM"));

store.dispatch(toggleTodo(1));

// Getting state.
const updatedState = store.getState();
console.log(updatedState, "updatedStatee....");
