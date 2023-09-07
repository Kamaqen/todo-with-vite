import { useState } from "react";
import "./style.css";

const App = () => {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);
  function handleChange(event) {
    setNewItem(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    setTodos([
      ...todos,
      { id: crypto.randomUUID(), title: newItem, completed: false },
    ]);
    setNewItem("");
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
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            type="text"
            id="item"
            onChange={handleChange}
            value={newItem}
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.length === 0 && "Emptier than your soul."}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
              <button
                className="btn btn-danger"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default App;
