import React from "react";
import Todo from "./Todo/Todo";

const TodoList = ({ items }) => {
  return (
    <div
      style={{
        marginTop: "2em",
      }}
    >
      {items?.length
        ? items.map((todo) => <Todo {...todo} key={todo.id} />)
        : "No Todo's to render "}
    </div>
  );
};

export default TodoList;
