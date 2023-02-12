import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useActions } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchUsers } from "../store/action-creators/user";
import { UserAction } from "../types/user";

const UserList: React.FC = () => {
  const { users, error, loading } = useTypedSelector((state) => state.user);

  //const dispatch = useAppDispatch();
  //const dispatch = useDispatch();

  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <h1>DATA is loading.....</h1>;
  }
  if (error) {
    return <h1>error {error}</h1>;
  }

  //console.log(users);
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default UserList;
