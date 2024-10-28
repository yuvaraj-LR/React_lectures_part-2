// const redux = require("redux");

import { configureStore } from "@reduxjs/toolkit";

// import * as redux from "redux";
import { todoReducer } from "./reducers/todoReducer";
import { noteReducer } from "./reducers/noteReducer";
import { notificationReducer } from "./reducers/notificationReducer";

// const result = redux.combineReducers({
//     todoReducer,
//     noteReducer
// })

// export const store = redux.createStore(result);

export const store = configureStore({
    reducer: {
        todoReducer,
        noteReducer,
        notificationReducer
    }
});