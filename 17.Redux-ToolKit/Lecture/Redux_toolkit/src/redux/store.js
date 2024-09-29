
// const redux = require("redux");

// import * as redux from "redux";
// import { combineReducers } from "redux";
// import { noteReducer } from "./reducers/noteReducer";
// import {todoReducer} from "./reducers/todoReducer";

// const result = combineReducers({
//     todoReducer,
//     noteReducer
// })

// export const store = redux.createStore(result);

import { configureStore } from "@reduxjs/toolkit";
import { noteReducer } from "./reducers/noteReducer";
import {todoReducer} from "./reducers/todoReducer";
import { notificationReducer } from "./reducers/notificationReducer";

export const store = configureStore({
    reducer: {
        noteReducer, 
        todoReducer,
        notificationReducer
    }
})