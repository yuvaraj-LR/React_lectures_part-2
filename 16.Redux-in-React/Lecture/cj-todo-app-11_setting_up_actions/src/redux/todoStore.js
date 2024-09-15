// const redux = require('redux');
import * as redux from "redux"
import {todoReducer} from "./reducer/todoReducer";

export const store = redux.createStore(todoReducer);