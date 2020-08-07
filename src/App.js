import React from "react";
import TodoPage from "./components/pages/TodoPage/TodoPage.jsx";
import Provider from "./context/Todos/Provider.jsx";
import "./App.css";

function App() {
  return (
    <Provider>
      <TodoPage />
    </Provider>
  );
}

export default App;
