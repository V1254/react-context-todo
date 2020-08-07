import React, { useState } from "react";
import TodoForm from "../../TodoForm/TodoForm";
import "./TodoPage.css";
import TodoList from "../../TodoList/TodoList";

// page consiting of Todo form and list of current todos

const TodoPage = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "My Body",
      body: "My Title",
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

  const deleteTodo = (id) => {
    console.log(`deleteTodo called with ${id}`);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-page">
      <TodoForm saveTodo={saveTodo} />
      <TodoList items={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default TodoPage;
