import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementTimer, timerSelector } from "../redux/reducers/timerReducer";
import { alertSelector } from "../redux/reducers/alertReducer";

export const Time = () => {
  const dispatch = useDispatch();
  const { isRunning, elapsedTime } = useSelector(timerSelector);
  const message = useSelector(alertSelector);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        dispatch(incrementTimer());
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRunning, dispatch]);

  return (
    <>
      <b>{elapsedTime}</b>;
      {message && <p>{message}</p>}
    </>
  )
};
