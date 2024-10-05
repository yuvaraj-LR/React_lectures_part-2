import { createSlice } from "@reduxjs/toolkit";

const {createAsyncThunk} = require("@reduxjs/toolkit");

const INITIAL_STATE = { comments: [], isLoading: false, error: null };

// define and export comments async thunk below
export const fetchComments = createAsyncThunk(
  "comment/fetchComments",
  async (arg, thunkAPI) => {
    try {
      // fetch("https://jsonplaceholder.typicode.com/comments")
      //   .then(res => {
      //     console.log(res.data, "dataa...");
      //     thunkAPI.disptach(fetchSuccess(res.data));          
      //   });

      const response = await fetch("https://jsonplaceholder.typicode.com/comments");
      const data = await response.json();
      disptach(fetchSuccess(data));
    } catch (e) {
      thunkAPI.disptach(fetchError(e));          
    }
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState: INITIAL_STATE,
  reducers: {
    fetchStart: (state, action) => {
      state.isLoading = true;
    },
    fetchSuccess: (state, action) => {
      state.comments = action.payload;
      state.isLoading = false;
    },
    fetchError: (state, action) => {
      state.error = "Failed to fetch comments.";
      state.isLoading = false;
    }
  }
});

export const commentsReducer = commentsSlice.reducer;
export const { fetchStart, fetchSuccess, fetchError } = commentsSlice.actions;

export const commentsSelector = (state) => state.commentsReducer;
