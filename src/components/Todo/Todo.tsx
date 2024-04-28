import clsx from "clsx";
import { Todo as TodoType } from "../../redux/todos/types";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../redux/todos/actions";
import deleteIcon from "../../assets/svg/delete-icon.svg";
import "./styles.scss";

export function Todo({
  todo,
  deleted = false,
}: {
  todo: TodoType;
  deleted?: boolean;
}) {
  const dispatch = useDispatch();

  const handleDeleteTodo = () => {
    if (deleted) return;

    dispatch(deleteTodo(todo));
  };

  const handleCompletedChange = () => {
    dispatch(updateTodo({ ...todo, completed: !todo.completed }));
  };

  return (
    <div className={clsx("todo", todo.completed && "todo_completed")}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleCompletedChange}
        disabled={deleted}
      />
      <p className="todo__title">{todo.title}</p>

      {!deleted && (
        <img
          className="todo__delete-icon"
          onClick={handleDeleteTodo}
          src={deleteIcon}
          alt="logo"
        />
      )}
    </div>
  );
}
