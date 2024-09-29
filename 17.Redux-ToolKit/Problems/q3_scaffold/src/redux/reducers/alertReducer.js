import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { message: null };

// create alert slice to handle start, pause, timer actions below
const alertSlice = createSlice({
    name: "alert",
    initialState: INITIAL_STATE,
    reducers: {
        "reset": (state, action) => {
            state.message = "";
        }

    }, 
    extraReducers: {
        "todo/startTimer": (state, action) => {
            state.message = "Timer has started."
        },
        "todo/pauseTimer": (state, action) => {
            state.message = "Timer has paused."
        },
        "todo/resetTimer": (state, action) => {
            state.message = "Timer set to 0"
        }
    }
})

// export the alert reducer function here
export const alertReducer = alertSlice.reducer;

// create and export alert selector function here
export const alertActions = alertSlice.actions;
export const alertSelector = (state) => state.alertReducer.message;
