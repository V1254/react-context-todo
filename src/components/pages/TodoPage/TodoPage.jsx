import React from "react";
import TodoForm from "../../TodoForm/TodoForm";
import "./TodoPage.css";
import TodoList from "../../TodoList/TodoList";

// page consiting of Todo form and list of current todos

const TodoPage = () => (
  <div className="todo-page">
    <TodoForm />
    <TodoList />
  </div>
);

export default TodoPage;
