import React from 'react';
import allTodos from './../../reducers/selectors.js';

class TodoListItem extends React.Component {

  render() {
    let status = this.props.item.done ? "Done" : "Undo";
    return (
        <li>
          {this.props.item.title}
          <button onClick={this.linkUpdate(this.props.item)}>{status}</button>
          <button onClick={this.linkRemove(this.props.item)}>Remove</button>
        </li>
    );

  }

  linkUpdate(item) {
    item["done"] = !item["done"];
    return (event => this.props.receiveTodo(item));
  }

  linkRemove(item) {
    return (event => this.props.removeTodo(item));
  }

}




export default TodoListItem;
