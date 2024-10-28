const redux = require("redux");

// Actions
const ADD_TODO = "Add TODO"
const TOGGLE_TODO = "Toggle TODO"

// Actions Creators
const addToDo = (text) => ({text, type: ADD_TODO});
const toggleTodo = (index) => ({index, type: TOGGLE_TODO});

const initialState = {
    todos: []
}

// Reducers
const todoReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        isCompleted: false
                    }
                ]
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos:  state.todos.map((todo, i) => {
                    if(i === action.index) {
                        todo.isCompleted = !todo.isCompleted
                    }
                    return todo;
                })
            }

        default:
            return state;
    }
}

// Store
const store = redux.createStore(todoReducer);

store.dispatch(addToDo("Breakfast at 9AM"));
store.dispatch(addToDo("Food at 3PM"));
store.dispatch(addToDo("GYM at 5PM"));
store.dispatch(toggleTodo(0));

console.log(store.getState());
