import { Form } from "./components/Form";
import { Todos } from "./components/Todos";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll } from "./redux/todoapp/actions";
import { useState } from "react";
import './css.css'
function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.operationsReducer);
  const [editFormVisibility, setEditFormVisibility] = useState(false);
  const [editTodo, setEditTodo] = useState("");
  const handleEditClick=(todo)=>{
    setEditFormVisibility(true);
    setEditTodo(todo);
  }
  const cancelUpdate=()=>{
    setEditFormVisibility(false);
  }
  return (
    <div className="warpper">
      <br></br>
      <h1 className="text_center">To Do APP</h1>
      <Form editFormVisibility={editFormVisibility} editTodo={editTodo} cancelUpdate={cancelUpdate}/>
      <Todos
        handleEditClick={handleEditClick}
        editFormVisibility={editFormVisibility}
      />
      {todos.length > 1 && (
        <button
          className="btn btn-danger btn-delete-all"
          onClick={() => dispatch(deleteAll())}
        >
          Delete All
        </button>
      )}
    </div>
  );
}

export default App;
