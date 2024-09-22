import { useSelector } from "react-redux";

export const Count = () => {
  console.log("I am calledd...");
  const { count } = useSelector((state) => state.counter);
  return <b>{count}</b>;
};
