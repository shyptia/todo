import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllTodos } from "../../redux/todos/selectors";
import { addTodo } from "../../redux/todos/actions";
import { v4 as uuidv4 } from "uuid";
import { TextInput } from "../../components/TextInput";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import './styles.scss';

export function TodoPage() {
  const todos = useSelector(selectAllTodos);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(
        addTodo({
          id: uuidv4(),
          title: newTodo,
          completed: false,
        })
      );
      setNewTodo("");
    }
  };

  return (
    <>
      <Header />
      <main>
        <h1>All Todos</h1>

        <div className="input-container">
          <TextInput
            placeholder="Type title of new todo..."
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <Button onClick={handleAddTodo}>Add todo</Button>
        </div>

        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </main>
    </>
  );
}
