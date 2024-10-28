import { createSlice } from "@reduxjs/toolkit"


const INITIAL_STATE = {
    message: ""
}

const notificationSlice = createSlice({
    name: "notification",
    initialState: INITIAL_STATE,
    reducers: {
        reset: (state, action) => {
            state.message = ""
        }
    },
    extraReducers: {
        "todo/add": (state, action) => {
            state.message = "Todo is Created."
        }
    }
});

export const notificationReducer = notificationSlice.reducer;
export const notificationActions = notificationSlice.actions;
export const notificationSelectors = (state) => state.notificationReducer.message;