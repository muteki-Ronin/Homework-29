import { setTodo } from './slice';

export const handleDeleteAll = () => (dispatch) => {
  localStorage.setItem('todo', JSON.stringify([]))
  dispatch(setTodo([]));
}