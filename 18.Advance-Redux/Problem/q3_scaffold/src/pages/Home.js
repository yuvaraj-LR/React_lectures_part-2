import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { List } from "../components/List";
// import async thunk action here
import {
  fetchComments,
  fetchError,
  fetchStart,
  fetchSuccess,
} from "../redux/reducers/commentsReducer";

export const Home = () => {
  const disptach = useDispatch();

  // remove this function and use it inside comments async thunk
  useEffect(() => {
    disptach(fetchStart());
    // remove this and dispatch async thunk action here
    fetchComments();
  }, []);

  return (
    <div className="home">
      <h3>Internet Comments</h3>
      <List />
    </div>
  );
};
