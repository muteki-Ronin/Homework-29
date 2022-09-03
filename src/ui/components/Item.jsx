// CORE
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// ENGINE
import { editTodo, deleteTodo } from '../../engine/thunks';


function Item({ itemElem }) {
  const [inputValue, setInputValue] = useState(itemElem.note);
  const dispatch = useDispatch();
  // const todos = useSelector((state) => state.todo.todos);

  // const onCheckbox = () => {

  // }

  const onEdit = () => {
    dispatch(editTodo(itemElem.id, inputValue));
  }

  const onDelete = () => {
    dispatch(deleteTodo(itemElem.id));
  }

  return (
    <div className='todo'>
      <label className='todo-label'>
        <input type="checkbox" className='todo-checkbox' />
        {itemElem.edit ?
          <input type="text" className='todo-input' value={inputValue} onChange={event => setInputValue(event.target.value)} /> :
          <div className={itemElem.checked ? 'todo-text todo-item__underline' : 'todo-text'}>{itemElem.note}</div>}
      </label>
      <button className='border-left' onClick={onEdit}>EDIT</button>
      <button className='border-right' onClick={onDelete}>DELETE</button>
    </div>
  )
}

export default Item;