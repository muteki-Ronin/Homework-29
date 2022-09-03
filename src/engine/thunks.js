import { setTodo } from './slice';

export const getTodos = () => (dispatch) => {
  dispatch(setTodo(JSON.parse(localStorage.getItem('todo')) || []));
}

export const createTodo = (note, id) => (dispatch, getState) => {
  const todos = getState().todo.todos;
  const newTodos = [...todos, { note, id, edit: false, checked: false }];
  dispatch(setTodo(newTodos));
  localStorage.setItem('todo', JSON.stringify(newTodos));
}

export const editCheckedTodo = (id) => (dispatch, getState) => {
  const todos = getState().todo.todos;
  const newTodos = todos.map(item => {
    if (item.id === id) {
      const check = !item.checked;
      console.log(check)
      return { ...item, checked: check }
    }
    return item;
  });
  dispatch(setTodo(newTodos));
  localStorage.setItem('todo', JSON.stringify(newTodos));

}

export const editTodo = (id, newValue) => (dispatch, getState) => {
  const todos = getState().todo.todos;
  const newTodos = todos.map(item => {
    if (item.id === id) {
      const edit = !item.edit;
      return { ...item, note: newValue, edit: edit }
    }
    return item;
  });
  dispatch(setTodo(newTodos));
  localStorage.setItem('todo', JSON.stringify(newTodos));
}

export const deleteTodo = (id) => (dispatch, getState) => {
  const todos = getState().todo.todos;
  const newTodos = todos.filter(item => item.id !== id);
  dispatch(setTodo(newTodos));
  localStorage.setItem('todo', JSON.stringify(newTodos));
}

export const deleteAllTodo = () => (dispatch) => {
  localStorage.setItem('todo', JSON.stringify([]))
  dispatch(setTodo([]));
}