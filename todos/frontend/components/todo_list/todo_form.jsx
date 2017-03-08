import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body: '',
      id: this.uniqueId(),
      done: false
    };
  }

  uniqueId() {
    return new Date().getTime();
  }

  linkState(key) {
    return (event => this.setState({[key]: event.currentTarget.value}));
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.receiveTodo(this.state);
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <br></br>
        <label>
          Title:
          <input type="text" name="title" onChange={this.linkState('title')} value={this.state.title} />
        </label>
        <label>
          Body:
          <input type="text" name="body" onChange={this.linkState('body')} value={this.state.body} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }


}

export default TodoForm;
