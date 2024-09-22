// add counter action creators imports here
import { DECREASE_COUNT, INCREASE_COUNT, RESET_COUNT } from "../actions/counterActions";

const INITIAL_STATE = { count: 0 };

// define counter reducer function here
export const counterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DECREASE_COUNT:
            return { ...state, count: state.count - 1 };
        case INCREASE_COUNT:
            return { ...state, count: state.count + 1 };
        case RESET_COUNT:
            return { count: 0 };
        default:
            return state;
    }
}
