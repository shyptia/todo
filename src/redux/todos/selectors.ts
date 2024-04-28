import { State } from "./types";

export const selectAllTodos = (state: State) => state.todos;
export const selectDeletedTodos = (state: State) => state.deletedTodos;
