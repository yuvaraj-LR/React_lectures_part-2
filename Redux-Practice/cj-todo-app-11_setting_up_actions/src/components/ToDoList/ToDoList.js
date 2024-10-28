import { useDispatch, useSelector } from "react-redux";
import "./ToDoList.css";
import { toggleTodo } from "../../redux/actions/todoActions";

function ToDoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const onToggle = (index) => {
    dispatch(toggleTodo(index));
  }
  
  return (
    <div className="container">
    <ul>
      {todos.map((todo,index) => (
        <li key={todo.id}>
          <span className="content">{todo.text}</span>
          <span className={todo.completed ? 'completed':'pending'}>{todo.completed ? 'Completed': 'Pending'}</span>
          <button className="btn btn-warning"
          onClick={()=>{onToggle(index)}}
          >Toggle</button>
          </li>
      ))}
    </ul>
    </div>
  );
}

export default ToDoList;
