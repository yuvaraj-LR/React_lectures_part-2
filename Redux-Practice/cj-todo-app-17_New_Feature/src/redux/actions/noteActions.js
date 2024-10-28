// Actions
export const ADD_NOTE = "Add note";
export const DELETE_NOTE = "Delete note"

// Action Creators
export const addNote = (text) => ({text: text, type: ADD_NOTE});
export const deleteNote = (index) => ({index: index, type: DELETE_NOTE});