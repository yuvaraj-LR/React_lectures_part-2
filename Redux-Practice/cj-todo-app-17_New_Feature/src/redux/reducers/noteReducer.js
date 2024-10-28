import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    notes: [
        {index: 0, text: "This is the first para."},
        {index: 1, text: "This is the second para." }
    ]
};

export const noteSlice = createSlice({
    name: "note",
    initialState: INITIAL_STATE,
    reducers: {
        "add": (state, action) => {
            state.notes.push({
                index: state.notes.length,
                text: action.payload
            })
        },
        "delete": (state, action) => {
            state.notes.splice(action.payload, 1)
        }
    }
})

export const noteReducer = noteSlice.reducer;
export const noteActions = noteSlice.actions;
export const noteSelector = (state) => state.noteReducer.notes





// export const noteReducer = (state = INITIAL_STATE, action) => {
//     switch(action.type) {
//         case ADD_NOTE:
//             return {
//                 ...state,
//                 notes: [
//                     ...state.notes,
//                     {
//                         index: state.notes.length,
//                         text: action.text
//                     }
//                 ]
//             }

//         case DELETE_NOTE:
//             return {
//                 ...state,
//                 notes: state.notes.filter((note, i) => note.index !== action.index)
//             }

//         default:
//             return state;
//     }
// }

