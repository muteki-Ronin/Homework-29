// CORE
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
// ENGINE
import { createTodo } from '../../engine/thunks';

function Form() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const onAddItem = () => {
    dispatch(createTodo(inputValue, v4()));
    setInputValue('');
  }

  return (
    <form className='form' onSubmit={onAddItem}>
      <input
        type="text"
        className="form-input border-left"
        value={inputValue}
        onChange={event => setInputValue(event.target.value)}
      />
      <button className='border-right'>ADD</button>
    </form>
  )
}

export default Form