import { useState } from "react";
import { useDispatch } from "react-redux";

// import {addTodo} from "../../redux/actions/todoActions";

import { todoActions } from "../../redux/reducers/todoReducer";

import styles from "./ToDoForm.module.css";
import { useSelector } from "react-redux";
import { notificationActions, notificationSelector } from "../../redux/reducers/notificationReducer";

function ToDoForm() {
  const [todoText, setTodoText] = useState("");
  const disptach = useDispatch();
  const message = useSelector(notificationSelector);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoText("");
    disptach(todoActions.add(todoText));
  };

  setTimeout(() => {
    disptach(notificationActions.reset());
  }, 5000);


  return (
    <div className={styles.container}>

    {message && <div>
        <h1>{message}</h1>
      </div>}
      
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control mb-3"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button className="btn btn-success float-end" type="submit">Create Todo</button>
    </form>
    </div>
  );
}

export default ToDoForm;