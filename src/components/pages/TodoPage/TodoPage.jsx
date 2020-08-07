import React, { useState } from "react";
import TodoForm from "../../TodoForm/TodoForm";
import "./TodoPage.css";
import TodoList from "../../TodoList/TodoList";

// page consiting of Todo form and list of current todos

const TodoPage = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 1,
      body: 1,
    },
  ]);

  const saveTodo = (todo) => {
    console.log(`savetodo called with ${JSON.stringify(todo, null, 4)}`);
    setTodos([
      ...todos,
      {
        id: todos.length,
        ...todo,
      },
    ]);
  };

  return (
    <div className="todo-page">
      <TodoForm saveTodo={saveTodo} />
      <TodoList items={todos} />
    </div>
  );
};

export default TodoPage;
