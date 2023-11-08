import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo, handleEditSubmit } from "../redux/todoapp/actions";
export const Form = ({ editFormVisibility, editTodo, cancelUpdate }) => {
  const dispatch = useDispatch();
  const [todoValues, setTodoValue] = useState(""); // make our todo
  const [editValue, setEditValue] = useState("");
  useEffect(() => {
    setEditValue(editTodo.todo);
  }, [editTodo]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let date = new Date();
    let time = date.getTime(); //make special ID with time zone
    let todoObj = {
      // make a copy of the todo object
      id: time,
      todo: todoValues,
      completed: false,
    };
    setTodoValue(""); //form come back empty
    dispatch(addTodo(todoObj));
  };
  const editSubmit = (e) => {
    e.preventDefault();
    let editedObj = {
      id: editTodo.id,
      todo: editValue,
      completed: false,
    };
    dispatch(handleEditSubmit(editedObj));
  };
  return (
    <>
      {" "}
      {editFormVisibility === false ? (
        <form className="form-group custum-form" onSubmit={handleSubmit}>
          <label>Add your todo-iteams</label>
          <div className="input-and-btn">
            <input
              type="text"
              className="form-control"
              required
              value={todoValues}
              placeholder="write your task"
              onChange={(e) => setTodoValue(e.target.value)}
            />
            <button type="submit" className="btn btn-secondary btn-md">
              Add
            </button>
          </div>
        </form>
      ) : (
        <form className="form-group custum-form" onClick={editSubmit}>
          <label>update your todo-iteams</label>
          <div className="input-and-btn">
            <input
              type="text"
              className="form-control"
              required
              value={editValue || ""}
              placeholder="write your task"
              onChange={(e) => setEditValue(e.target.value)}
            />
            <button type="submit" className="btn btn-secondary btn-md">
              Update
            </button>
          </div>
          <button
            type="button"
            className="btn btn-primary btn-md back-btn"
            onClick={cancelUpdate}
          >
            Back
          </button>
        </form>
      )}
    </>
  );
};
