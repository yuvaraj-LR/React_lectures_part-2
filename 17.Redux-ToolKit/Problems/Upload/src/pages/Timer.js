import { TimerActions } from "../components/TimerActions";
import { Time } from "../components/Time";
import { useSelector, useDispatch } from "react-redux";
import { alertSelector } from "../redux/reducers/alertReducer";
import { resetalert } from "../redux/reducers/alertReducer";
export const Timer = () => {
  // get alert message here
  // create effect to reset alert message here
  const dispatch = useDispatch();
  const message = useSelector(alertSelector);
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

      <h1>Simple Timer</h1>
      <Time />
      <TimerActions />
    </div>
  );
};
