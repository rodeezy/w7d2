import React from 'react';
//import Todo from './todo.jsx';
import TodoListItem from './todo_list_item.jsx';
import TodoForm from './todo_form.jsx';

// const TodoList = ({todos, receiveTodo, removeTodo}) => {
//   return (
//     <ul>
//       {todos.map( todo_item => {
//          return (
//            <TodoListItem key={todo_item.id} item={todo_item} removeTodo={removeTodo} receiveTodo={receiveTodo} />
//         );
//       })}
//       <TodoForm receiveTodo={receiveTodo}/>
//     </ul>
//   );
//
// };
//
// const componentDidMount = () => {
//
// };
// //;{todo_item.title} {todo_item.id} {todo_item.body}
// //<li key={todo_item.id}> {todo_item.title}</li>



class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map( todo_item => {
           return (
             <TodoListItem key={todo_item.id} item={todo_item} removeTodo={this.props.removeTodo} receiveTodo={this.props.receiveTodo} />
          );
        })}
        <TodoForm receiveTodo={this.props.receiveTodo}/>
      </ul>
    );
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

}

export default TodoList;
