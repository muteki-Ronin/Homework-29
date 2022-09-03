// CORE
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// ENGINE
import { editCheckedTodo, editTodo, deleteTodo } from '../../engine/thunks';


function Item({ itemElem }) {
  const [inputValue, setInputValue] = useState(itemElem.note);
  const dispatch = useDispatch();

  const onCheckbox = () => {
    dispatch(editCheckedTodo(itemElem.id));
  }

  const onEdit = () => {
    dispatch(editTodo(itemElem.id, inputValue));
  }

  const onDelete = () => {
    dispatch(deleteTodo(itemElem.id));
  }

  return (
    <div className='todo'>
      <label className='todo-label'>
        <input type="checkbox" className='todo-checkbox' defaultChecked={itemElem.checked} onChange={onCheckbox} />
        {itemElem.edit ?
          <input type="text" className='todo-input' value={inputValue} onChange={event => setInputValue(event.target.value)} /> :
          <div className={itemElem.checked ? 'todo-text todo-item__underline' : 'todo-text'}>{itemElem.note}</div>}
      </label>
      <button className='border-left' onClick={onEdit}>{itemElem.edit ? 'SAVE' : 'EDIT'}</button>
      <button className='border-right' onClick={onDelete}>DELETE</button>
    </div>
  )
}

export default Item;