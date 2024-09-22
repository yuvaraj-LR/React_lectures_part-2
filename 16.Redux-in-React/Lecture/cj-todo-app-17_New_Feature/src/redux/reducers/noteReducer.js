import { ADD_NOTE, DELETE_NOTE } from "../actions/noteActions";

const initialState = {
    notes: [{text: "This is Yuvaraj. I am a Full-Stack developer."}, {text: "I am in love with a girl called Dhathva (My torture)."}]
};

export function noteReducer(state=initialState, action) {
    switch(action.type) {
        case ADD_NOTE:
            return {
                ...state,
                notes: [
                    ...state.notes,
                    {
                        text: action.text
                    }
                ]
            }

        case DELETE_NOTE:
            return {
                ...state,
                notes: state.notes.filter((todo, i) => action.index !== i)
            }

        default:
            return state;            
    }
}