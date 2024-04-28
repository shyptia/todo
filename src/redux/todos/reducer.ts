import { Action, ActionType, State } from "./types";

const initialState: State = {
  todos: [],
  deletedTodos: [],
};

const todoReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.addTodo:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case ActionType.deleteTodo:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id),
        deletedTodos: [...state.deletedTodos, action.payload],
      };

    case ActionType.updateTodo:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              ...action.payload,
            };
          }

          return todo;
        }),
      };

    case ActionType.restoreTodo:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        deletedTodos: state.deletedTodos.filter((item) => item.id !== action.payload.id),
      };

    default:
      return state;
  }
};

export default todoReducer;
