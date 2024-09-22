// define counter action constants here
export const DECREASE_COUNT = "Decrease count";
export const INCREASE_COUNT = "Increase count";
export const RESET_COUNT = "Reset count";

// define counter action creators here
export const decreaseCount = (count) => ({count, type: DECREASE_COUNT});
export const increaseCount = (count) => ({count, type: INCREASE_COUNT});
export const resetCount = () => ({type: RESET_COUNT});