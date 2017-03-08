import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import allTodos from './reducers/selectors.js';
import {receiveTodo, removeTodo, receiveTodos, fetchTodos} from './actions/todo_actions.js';
import Root from './components/root.jsx';
import { whatever } from './util/todo_api_util.js';

window.allTodos = allTodos;
window.receiveTodo = receiveTodo;
window.removeTodo = removeTodo;
window.receiveTodos = receiveTodos;
window.fetchTodos = fetchTodos;
window.whatever = whatever;

//const App = App;

document.addEventListener("DOMContentLoaded", () =>{
  const root = document.getElementById("root");
  const store = configureStore;
  window.store = store;
  ReactDOM.render(<Root store={store} />, root);
});
