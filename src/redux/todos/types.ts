export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export interface State {
  todos: Todo[];
  deletedTodos: Todo[];
}

export enum ActionType {
  addTodo = "ADD_TODO",
  deleteTodo = "DELETE_TODO",
  updateTodo = "UPDATE_TODO",
}

export type Action =
  | { type: ActionType.addTodo, payload: Todo }
  | { type: ActionType.deleteTodo, payload: Todo }
  | { type: ActionType.updateTodo, payload: Partial<Todo> };