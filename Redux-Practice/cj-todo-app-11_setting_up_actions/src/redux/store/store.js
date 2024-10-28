const redux = require("redux");
const { todoReducer } = require("../reducer/todoReducer");

export const store = redux.createStore(todoReducer);
