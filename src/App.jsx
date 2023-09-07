import { useState } from "react";
import "./style.css";
import NewTodoForm from "./components/NewTodoForm";
import { TodoList } from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  function addTodo(title) {
    setTodos([
      ...todos,
      { id: crypto.randomUUID(), title: title, completed: false },
    ]);
  }
  function toggleTodo(id, checked) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: checked };
        }
        return todo;
      });
    });
  }
  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }
  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
};
export default App;
