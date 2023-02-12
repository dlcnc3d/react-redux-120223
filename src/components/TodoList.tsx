import React, { useEffect } from "react";
import { useActions } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";

type Props = {};

const TodoList: React.FC = () => {
  const { page, error, loading, todos, limit } = useTypedSelector(
    (state) => state.todo
  );

  const { fetchTodos, setTodoPage } = useActions();

  const pages = [1, 2, 3, 4, 5];
  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  if (loading) {
    return <h1>DATA is loading.....</h1>;
  }
  if (error) {
    return <h1>error {error}</h1>;
  }

  //console.log(users);
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.id} - {todo.title}
        </div>
      ))}

      <div style={{ display: "flex" }}>
        {pages.map((p) => (
          <div
            key={p}
            onClick={() => setTodoPage(p)}
            style={{
              border: p === page ? "2px solid green" : "1px solid grey",
              padding: 10,
            }}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
