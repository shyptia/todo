import { ActionType, Todo } from "./types";

export const addTodo = (todo: Todo) => ({
  type: ActionType.addTodo,
  payload: todo,
});

export const deleteTodo = (todo: Todo) => ({
  type: ActionType.deleteTodo,
  payload: todo,
});

export const updateTodo = (todo: Partial<Todo>) => ({
  type: ActionType.updateTodo,
  payload: todo,
});

export const restoreTodo = (todo: Todo) => ({
  type: ActionType.restoreTodo,
  payload: todo,
});
