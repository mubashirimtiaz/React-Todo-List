import React from "react";
import "./App.css";
import TodosList from "./TodosList";

function App() {
  return (
    <div className="App">
      <h1 className="App-title">Todo App</h1>
      <p style={{ color: "purple", fontSize: "1.1em" }}>
        A Simple React Todo App!
      </p>
      <TodosList />
    </div>
  );
}

export default App;
