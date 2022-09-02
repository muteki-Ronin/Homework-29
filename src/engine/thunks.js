import { setTodo } from './slice';

export const getTodos = () => (dispatch) => {
  dispatch(setTodo(JSON.parse(localStorage.getItem('todo')) || []));
}

export const createTodos = (note, id) => (dispatch, getState) => {
  const todos = getState().todo.todos;
  const newTodo = [...todos, { note, id, }];
  dispatch(setTodo(newTodo));
  localStorage.setItem('todo', JSON.stringify(newTodo));
}



export const handleDeleteAll = () => (dispatch) => {
  localStorage.setItem('todo', JSON.stringify([]))
  dispatch(setTodo([]));
}