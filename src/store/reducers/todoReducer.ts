import { TodoAction, TodoActionTypes } from "./../../types/todo";
import { TodoState } from "../../types/todo";

const initialState: TodoState = {
  todos: [],
  page: 1,
  limit: 10,
  loading: false,
  error: null,
};

export const todoReducer = (
  state: TodoState = initialState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODO:
      return { ...state, loading: true };
    case TodoActionTypes.FETCH_TODO_SUCCESS:
      return { ...state, loading: false, todos: action.payload };
    case TodoActionTypes.FETCH_TODO_ERROR:
      return { ...state, loading: false, error: action.payload };
    case TodoActionTypes.SET_TODO_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};
