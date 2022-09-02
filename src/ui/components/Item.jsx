// CORE
import React from 'react';
// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// ENGINE
// import { setTodo } from '../../engine/slice';
import { handleDelete } from '../../engine/thunks';


function Item({ itemElem }) {
  const dispatch = useDispatch();
  // const todos = useSelector((state) => state.todo.todos);

  // const onCheckbox = () => {

  // }

  // const onEdit = () => {

  // }

  const onDelete = () => {
    dispatch(handleDelete(itemElem.id));
  }

  return (
    <div className='todo'>
      <label className='todo-label'>
        <input type="checkbox" className='todo-checkbox' />
        <div className='todo-text'>{itemElem.note}</div>
      </label>
      <button className='border-left'>EDIT</button>
      <button className='border-right' onClick={onDelete}>DELETE</button>
    </div>
  )
}

export default Item;