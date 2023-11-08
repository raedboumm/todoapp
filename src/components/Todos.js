import React from "react";
import Icon from "react-icons-kit";
import { edit2 } from "react-icons-kit/feather/edit2";
import { trash } from "react-icons-kit/feather/trash";
import { deleteTodo, handleCheckbox } from "../redux/todoapp/actions";

import { useSelector, useDispatch } from "react-redux";

export const Todos = ({ editFormVisibility, handleEditClick }) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.operationsReducer);
  return todos.map((todos) => (
    <div key={todos.id} className="todo-box">
      <div className="content">
        {editFormVisibility === false && (
          <input type="checkbox" checked={todos.completed} onChange={()=>dispatch(handleCheckbox(todos.id))}></input>
        )}
        <p
          style={
            todos.completed === true
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {todos.todo}
        </p>
      </div>
      <div className="actions-box">
        {editFormVisibility === false && (
          <>
            <span onClick={() => handleEditClick(todos)}>
              <Icon icon={edit2} />
            </span>

            <span onClick={() => dispatch(deleteTodo(todos.id))}>
              <Icon icon={trash} />
            </span>
          </>
        )}
      </div>
    </div>
  ));
};
