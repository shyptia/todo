import clsx from "clsx";
import { Todo as TodoType } from "../../redux/todos/types";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../redux/todos/actions";
import deleteIcon from "../../assets/svg/delete-icon.svg";
import editIcon from "../../assets/svg/edit-icon.svg";
import "./styles.scss";
import { useState } from "react";
import { TextInput } from "../TextInput";
import { Button } from "../Button";

export function Todo({
  todo,
  deleted = false,
}: {
  todo: TodoType;
  deleted?: boolean;
}) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(todo));
  };

  const handleCompletedChange = () => {
    dispatch(updateTodo({ ...todo, completed: !todo.completed }));
  };

  const handleChangeTitle = () => {
    if (!editedTitle.trim()) {
      return;
    }

    dispatch(updateTodo({ ...todo, title: editedTitle }));
    setIsEditing(false);
  };

  return (
    <div className={clsx("todo", todo.completed && "todo_completed")}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleCompletedChange}
        disabled={deleted || isEditing}
      />
      {isEditing ? (
        <div className="edit-container">
          <TextInput
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <Button onClick={handleChangeTitle}>Save changes</Button>
        </div>
      ) : (
        <p
          className={clsx(
            "todo__title",
            todo.completed && "todo__title_completed"
          )}
        >
          {todo.title}
        </p>
      )}

      {!deleted && !isEditing && (
        <>
          <img
            className="todo__delete-icon"
            onClick={() => setIsEditing(true)}
            src={editIcon}
            alt="edit icon"
          />

          <img
            className="todo__delete-icon"
            onClick={handleDeleteTodo}
            src={deleteIcon}
            alt="delete icon"
          />
        </>
      )}
    </div>
  );
}
