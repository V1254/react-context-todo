import React, { useContext } from "react";
import Todo from "./Todo/Todo";
import { TodoContext } from "../../context/Todos/Provider";
import { DELETE_TODO } from "../../context/Todos/actionTypes";
import "./TodoList.css";

const TodoList = () => {
  const { todos, dispatch } = useContext(TodoContext);

  const onDelete = (id) => {
    console.log(`ondelete reveiced ${id}`);
    dispatch({
      type: DELETE_TODO,
      payload: {
        id,
      },
    });
  };

  return (
    <div className="todo-list">
      {todos?.length
        ? todos.map((todo) => <Todo {...todo} key={todo.id} onDelete={onDelete} />)
        : "No Todo's to render "}
    </div>
  );
};

export default TodoList;
