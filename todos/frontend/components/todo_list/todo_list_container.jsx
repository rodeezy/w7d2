import {connect} from 'react-redux';
import allTodos from './../../reducers/selectors.js';
import TodoList from "./todo_list.jsx";
import { receiveTodo, removeTodo, fetchTodos } from './../../actions/todo_actions.js';

const mapStateToProps = (state) => ({
  todos: allTodos(state)

});

const mapDispatchToProps = (dispatch) => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  removeTodo: (todo) => dispatch(removeTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
