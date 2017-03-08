// const fetchSuccess = todo => console.log(todo);
// const fetchError = err => console.log(err);

//const fetchTodo = todoId => $.ajax({ url: `/api/todos/${todoId}` });

export const whatever = () => {
  return $.ajax({method: 'GET', url: 'api/todos'});

};
