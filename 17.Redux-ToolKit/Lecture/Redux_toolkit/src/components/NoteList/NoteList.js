
import { useSelector, useDispatch } from "react-redux";
import styles from "./NoteList.module.css";
import { noteActions } from "../../redux/reducers/noteReducer";

function NoteList() {
    const notes=useSelector((state)=> state.noteReducer.notes);
    const dispatch=useDispatch();

  return (
    <div className="container">
    <ul>
      {notes.map((note,index) => (
        <li className={styles.item}>
            <p>{note.createdOn.toLocaleDateString()}</p>
            <p className={styles.notecontent}>{note.text}</p>
            <button className={"btn btn-danger "+styles.button}
            onClick={()=> dispatch(noteActions.delete(index))}>Delete</button>
            </li>
      ))}
    </ul>
    </div>
  );
}

export default NoteList;
