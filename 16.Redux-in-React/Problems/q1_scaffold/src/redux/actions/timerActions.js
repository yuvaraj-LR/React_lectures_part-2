// define action constants here
export const START_TIMER = "START Timer";
export const PAUSE_TIMER = "Pause Timer";
export const RESET_TIMER = "Reset Timer";
export const INCREMENT_TIMER = "Increment Timer";

// define action creators here
export const incrementTimer = () => (
    {type: INCREMENT_TIMER}
)

export const pauseTimer = (isRunning) => (
    {isRunning, type: PAUSE_TIMER}
)

export const resetTimer = (isRunning) => (
    {isRunning, type: RESET_TIMER}
)

export const startTimer = (isRunning) => (
    {isRunning, type: START_TIMER}
)

