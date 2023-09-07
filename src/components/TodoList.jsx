import { TodoItem } from "./TodoItem";
import { PropTypes } from "prop-types";

export const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="list">
      {todos.length === 0 && "Emptier than your soul."}
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            checked={todo.completed}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
};
TodoList.proptypes = {
  todos: PropTypes.array,
  toggleTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
};
