import { useSelector } from "react-redux";
import { Header } from "../../components/Header";
import { selectDeletedTodos } from "../../redux/todos/selectors";
import { Todo } from "../../components/Todo";
import './styles.scss';

export function DeletedTodoPages() {
  const deletedTodos = useSelector(selectDeletedTodos);

  return (
    <>
      <Header />
      <main className="container">
        <h1>Deleted todos</h1>

        {deletedTodos.map(deletedTodo => <Todo key={deletedTodo.id} todo={deletedTodo} deleted />)}
      </main>
    </>
  );
}
