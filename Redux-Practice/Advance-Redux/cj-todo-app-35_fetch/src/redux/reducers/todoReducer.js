const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")
import axios from 'axios';

const initialState={
    todos:[
        
    ]
}

export const getInitialStateAsync = createAsyncThunk(
    "todo/getInitialState",
    (arg, thunkAPI) => {
        axios.get("http://localhost:4100/api/todos").then((res) => {
            console.log(res.data, "dataa....");
            thunkAPI.dispatch(actions.setInitialState(res.data));
        })
    }
) 


// Creating Reducer using Redux Toolkit

const todoSlice = createSlice({
    name:'todo',
    initialState:initialState,
    reducers:{
        // this is add action
        add:(state, action)=>{
                state.todos.push({
                    text:action.payload,
                    completed: false
                })
        },
        toggle:(state, action)=>{
            state.todos.map((todo, i)=>{
                if(i==action.payload){
                    todo.completed=!todo.completed;
                }
                return todo;
            })
        },
        setInitialState: (state, action) => {
            state.todos = [...action.payload];
        }
    }
});

export const todoReducer=todoSlice.reducer;

export const actions = todoSlice.actions;

// selector
export const todoSelector = (state)=>state.todoReducer.todos;



// Reducer using redux

// export function todoReducer(state=initialState, action){

//     switch(action.type){
//         case ADD_TODO:
//             return {
//                 ...state,
//                 todos:[
//                     ...state.todos,
//                     {
//                         text:action.text,
//                         completed: false
//                     }
//                 ]
//             }
//         case TOGGLE_TODO:
//             return{
//                 ...state,
//                 todos: state.todos.map((todo, i)=>{
//                     if(i==action.index){
//                         todo.completed=!todo.completed
//                     }
//                     return todo;
//                 })
//             }
//         default:
//             return state;
//     }
// }