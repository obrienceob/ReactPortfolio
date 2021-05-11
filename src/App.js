import React from "react";
import Form from "./components/Form";
import TodoList from "./components/ToDoList";
import { TodoProvider } from "./utils/GlobalState";
import "./App.css";


function App() {
  return (
    <div className="container">
      <TodoProvider>
        <Form />
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;