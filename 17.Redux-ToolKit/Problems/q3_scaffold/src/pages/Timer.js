import { TimerActions } from "../components/TimerActions";
import { Time } from "../components/Time";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { alertSelector } from "../redux/reducers/alertReducer";

export const Timer = () => {
  // get alert message here
  const dispatch = useDispatch();
  const message = useSelector(alertSelector);

  // create effect to reset alert message here
  console.log(message);
  if (message) {
    setTimeout(() => {
      dispatch(resetalert());
    }, 2000);
  }

  return (
    <div className="page">
      {/* conditionally show the below div with alert message */}
      {message ? <div className="alert">{message}</div> : null}

      <div className="alert"></div>
      <h1>Simple Timer</h1>
      <Time />
      <TimerActions />
    </div>
  );
};
