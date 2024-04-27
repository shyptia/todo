import { Action, State } from "./types";

const initialState: State = {
  todos: [],
  deletedTodos: [],
};

const todoReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id),
        deletedTodos: [...state.deletedTodos, action.payload],
      };

    case 'UPDATE_TODO':
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

    default:
      return state;
  }
};

export default todoReducer;
