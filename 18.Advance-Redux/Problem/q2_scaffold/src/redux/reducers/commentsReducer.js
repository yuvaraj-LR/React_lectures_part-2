import { createSlice } from "@reduxjs/toolkit";

// import redux toolkit methods here
const INITIAL_STATE = { comments: [], isLoading: false, error: null };

// define comments reducer function here
const commentSlice = createSlice({
    name: "comments",
    initial_state: INITIAL_STATE,
    reducers: {
        setInitialComments: (state, action) => {
            state.comments = [...action.payload];
        }
    }
})

// export the comments reducer function and action creators here
export const commentReducer = commentSlice.reducer;
export const commentActions = commentSlice.actions;

// export the comments selector function here
export const commentSelector = (state) => state.commentReducer;