export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
import { whatever } from './../util/todo_api_util.js';

export const receiveTodos = (todos) => {
  return {
    type: RECEIVE_TODOS,
    todos: todos
  };
};

export const receiveTodo = (todo) => {
  return {
    type: RECEIVE_TODO,
    todo
  };
};

export const removeTodo = (todo) => {
  return {
    type: REMOVE_TODO,
    todo
  };
};

export const fetchTodos = () => {
  return (dispatch) => {
    const fetchSuccess = todos => receiveTodos(todos);
    const fetchError = err => console.log(err);
    return whatever().then(fetchSuccess).fail(fetchError);
  };
};
