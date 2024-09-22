import { useDispatch, useSelector } from "react-redux";
import { decreaseCount, increaseCount, resetCount } from "../redux/actions/counterActions";
// add action creators imports here

export const CounterActions = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);

  return (
    <div className="actions">
      {/* disptach action to decrease count here */}
      <button onClick={() => dispatch(decreaseCount())}  disabled={count <= 0}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
          alt="dec"
        />
      </button>
      {/* disptach action to increase count here */}
      <button onClick={() => dispatch(increaseCount())} disabled={count >= 10}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
          alt="inc"
        />
      </button>
      {/* disptach action to reset count here */}
      <button onClick={() => dispatch(resetCount())}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/9923/9923627.png"
          alt="reset"
        />
      </button>
    </div>
  );
};
