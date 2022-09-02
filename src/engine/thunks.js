import { setTodo } from './slice';

export const getTodos = () => (dispatch) => {
  dispatch(setTodo(JSON.parse(localStorage.getItem('todo')) || []));
}



export const handleDeleteAll = () => (dispatch) => {
  localStorage.setItem('todo', JSON.stringify([]))
  dispatch(setTodo([]));
}