import { useDispatch, useSelector } from "react-redux";
import { timerAction } from "../redux/reducers/timerReducer";
// change the timer actions imports
// import {
//   pauseTimer,
//   resetTimer,
//   startTimer
// } from "../redux/actions/timerActions";

export const TimerActions = () => {
  const dispatch = useDispatch();
  // change as per the store implementation
  const { isRunning } = useSelector((state) => state.timerReducer);

  return (
    <div className="actions">
      <button disabled={isRunning} onClick={() => dispatch(timerAction.START_TIMER(true))}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/7709/7709039.png"
          alt="start"
        />
      </button>
      <button disabled={!isRunning} onClick={() => dispatch(timerAction.PAUSE_TIMER(false))}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2404/2404385.png"
          alt="pause"
        />
      </button>
      <button onClick={() => dispatch(timerAction.RESET_TIMER())}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/9923/9923627.png"
          alt="reset"
        />
      </button>
    </div>
  );
};
