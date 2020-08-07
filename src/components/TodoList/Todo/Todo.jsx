import React from "react";
import "./Todo.css";

const Todo = ({ id, title, body, onDelete }) => {
  return (
    <div id={`todo-${id}`} className="todo">
      <h4>{title}</h4>
      <p>{body}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default Todo;
