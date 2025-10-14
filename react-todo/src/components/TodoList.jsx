import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";

const initialTodos = [
  { id: 1, text: "Buy milk", completed: false },
  { id: 2, text: "Walk the dog", completed: true },
  { id: 3, text: "Read a chapter", completed: false },
];

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);

  function addTodo(text) {
    const nextId = todos.length ? Math.max(...todos.map(t => t.id)) + 1 : 1;
    setTodos([{ id: nextId, text, completed: false }, ...todos]);
  }

  function toggleTodo(id) {
    setTodos(todos.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
  }

  function deleteTodo(id) {
    setTodos(todos.filter(t => t.id !== id));
  }

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAdd={addTodo} />
      <ul aria-label="todo-list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            data-testid={`todo-${todo.id}`}
            aria-checked={todo.completed}
            style={{ cursor: "pointer", display: "flex", gap: "8px", alignItems: "center" }}
          >
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                flex: 1
              }}
            >
              {todo.text}
            </span>
            <button
              aria-label={`delete-${todo.id}`}
              onClick={() => deleteTodo(todo.id)}
              type="button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
