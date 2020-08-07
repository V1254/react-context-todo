import React, { useState, useContext } from "react";
import { SAVE_TODO } from "../../context/Todos/actionTypes";
import { TodoContext } from "../../context/Todos/Provider";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: SAVE_TODO,
      payload: {
        title,
        body,
      },
    });
    setTitle("");
    setBody("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        id="title"
        placeholder="Todo Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        id="body"
        placeholder="Todo Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button>Add Todo</button>
    </form>
  );
};

export default TodoForm;
