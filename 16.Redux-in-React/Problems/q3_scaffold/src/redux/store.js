// import {redux} from "redux";

const redux = require("redux");
import { timerReducer } from "./reducers/timerReducer";

export const store = redux.createStore(timerReducer);