import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Buy milk")).toBeInTheDocument();
    expect(screen.getByText("Walk the dog")).toBeInTheDocument();
    expect(screen.getByText("Read a chapter")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add todo...");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "Learn React Testing" } });
    fireEvent.click(addButton);

    expect(screen.getByText("Learn React Testing")).toBeInTheDocument();
  });

  test("toggles a todo's completion", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Buy milk");

    // Click once to mark completed
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: line-through");

    // Click again to unmark
    fireEvent.click(todoItem);
    expect(todoItem).not.toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Read a chapter");
    const deleteButton = todoItem.nextSibling;

    fireEvent.click(deleteButton);
    expect(screen.queryByText("Read a chapter")).not.toBeInTheDocument();
  });
});
