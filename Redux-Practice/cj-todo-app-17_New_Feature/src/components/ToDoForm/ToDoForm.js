import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {addTodo} from "../../redux/actions/todoActions";

import { todoActions } from "../../redux/reducers/todoReducer";

import "./ToDoForm.css";
import { notificationActions, notificationSelectors } from "../../redux/reducers/notificationReducer";

function ToDoForm() {
  const [todoText, setTodoText] = useState("");
  const disptach = useDispatch();
  
  const message = useSelector(notificationSelectors);

  if(message) {
    setTimeout(() => {
      disptach(notificationActions.reset())
    }, 3000)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoText("");
    disptach(todoActions.add(todoText));
    
  };

  return (
    <div className="container">
      
      {message && <div><p>{message}</p></div>}

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