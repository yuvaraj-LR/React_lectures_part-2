import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementTimer } from "../redux/actions/timerActions";

export const Timer = () => {
  const { isRunning, elapsedTime } = useSelector((state) => state);

  const disptach = useDispatch();

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        // disptach incrementTimer action here
        disptach(incrementTimer());
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  return <b>{elapsedTime}</b>;
};
