import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList component", () => {
  test("renders initial demo todos", () => {
    render(<TodoList />);

    // Check that the initial demo todos appear
    expect(screen.getByText("Buy milk")).toBeInTheDocument();
    expect(screen.getByText("Walk the dog")).toBeInTheDocument();
    expect(screen.getByText("Read a chapter")).toBeInTheDocument();

    // Check that completed attribute reflects initial completed state (Walk the dog is completed)
    const todo2 = screen.getByTestId("todo-2");
    expect(todo2).toHaveAttribute("aria-checked", "true");
  });

  test("adds a new todo", () => {
    render(<TodoList />);

    const input = screen.getByLabelText("todo-input");
    const form = screen.getByLabelText("add-todo-form");

    fireEvent.change(input, { target: { value: "New item test" } });
    fireEvent.submit(form);

    expect(screen.getByText("New item test")).toBeInTheDocument();
  });

  test("toggles a todo between completed and not completed", () => {
    render(<TodoList />);

    const item = screen.getByText("Buy milk");
    const parentLi = item.closest("li");
    // initially should be not completed
    expect(parentLi).toHaveAttribute("aria-checked", "false");

    // click to toggle completed
    fireEvent.click(item);
    expect(parentLi).toHaveAttribute("aria-checked", "true");

    // click again to toggle back
    fireEvent.click(item);
    expect(parentLi).toHaveAttribute("aria-checked", "false");
  });

  test("deletes a todo", () => {
    render(<TodoList />);

    // ensure an item is present
    const toDelete = screen.getByText("Read a chapter");
    const li = toDelete.closest("li");
    expect(li).toBeInTheDocument();

    // find its delete button by aria-label
    const deleteBtn = screen.getByLabelText("delete-3");
    fireEvent.click(deleteBtn);

    // Now it should not exist
    expect(screen.queryByText("Read a chapter")).not.toBeInTheDocument();
  });
});
