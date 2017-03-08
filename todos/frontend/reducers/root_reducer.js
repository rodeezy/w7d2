import { combineReducers } from 'redux';
import todosReducer from './todos_reducer.js';

//todo action -- check todos type and add to Todos
const rootReducer = combineReducers({
  todos: todosReducer
});


export default rootReducer;
