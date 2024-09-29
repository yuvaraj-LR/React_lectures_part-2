import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { message: null };

// create alert slice to handle start, pause, timer actions below
export const alertSlice = createSlice({
  name: "alert",
  initialState: INITIAL_STATE,
  reducers: {
    reset: (state,action) => {
        state.message="";
    },
  },
  extraReducers: {
    "timer/startTimer": (state, action) => {
      state.message = "Timer has started";
    },
    "timer/pauseTimer": (state, action) => {
      state.message = "Timer is paused";
    },
    "timer/resetTimer": (state, action) => {
      state.message = "Timer set to 0";
    },
    "counter/incrementCounter":(state,action)=>{
       
    },
    "counter/decrementCounter":(state,actions)=>{

    },
    "counter/resetCounter":(state,actions)=>{

    }

  },
});
// export the alert reducer function here
export const alertReducer = alertSlice.reducer;
export const resetalert = alertSlice.actions.reset;
// create and export alert selector function here
export const alertSelector = (state) => state.alertReducer.message;
