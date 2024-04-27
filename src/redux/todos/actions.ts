import { Todo } from "./types";

export const addTodo = (todo: Todo) => ({
  type: 'ADD_TODO',
  payload: todo,
});

export const deleteTodo = (todo: Todo) => ({
  type: 'DELETE_TODO',
  payload: todo,
});

export const updateTodo = (todo: Partial<Todo>) => ({
  type: 'UPDATE_TODO',
  payload: todo,
});
