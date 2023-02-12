import React from "react";
import TodoList from "./components/TodoList";
import UserList from "./components/UserList";

type Props = {};

const App = (props: Props) => {
  return (
    <div>
      <UserList></UserList>
      <hr />
      <TodoList></TodoList>
    </div>
  );
};

export default App;
