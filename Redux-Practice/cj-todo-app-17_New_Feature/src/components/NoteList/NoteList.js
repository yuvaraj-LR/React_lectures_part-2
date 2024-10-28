import { useSelector, useDispatch } from "react-redux";
import "./NoteList.css";
import { deleteNote } from "../../redux/actions/noteActions";
import { noteActions, noteSelector } from "../../redux/reducers/noteReducer";

function NoteList() {
    // const notes=[];
  const notes=useSelector(noteSelector);
  const disptach = useDispatch();

  return (
    <div className="container">
    <ul>
      {notes.map((note,index) => (
        <li>
            {/* <p>{note.createdOn.toLocaleDateString()}</p> */}
            <p className="note-content">{note.text}</p>
            <button className="btn btn-danger" onClick={() => disptach(noteActions.delete(index))}>Delete</button>
            </li>
      ))}
    </ul>
    </div>
  );
}

export default NoteList;
