import React, { useState } from "react";

const TodoForm = ({ saveTodo }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`submitting ${title} and ${body}`);
    saveTodo({
      title,
      body,
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
