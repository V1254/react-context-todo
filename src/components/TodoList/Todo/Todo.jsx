import React from "react";
import "./Todo.css";

const Todo = ({ id, title, body }) => (
  <div id={`todo-${id}`} className="todo">
    <h4>{title}</h4>
    <p>{body}</p>
  </div>
);

export default Todo;
