// CORE
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
// ENGINE
import { createTodos } from '../../engine/thunks';

function Form() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const onAddItem = () => {
    dispatch(createTodos(value, v4()));
    setValue('');
  }

  return (
    <form className='form' onSubmit={onAddItem}>
      <input type="text" className="form-input border-left" value={value} onChange={event => setValue(event.target.value)} />
      <button className='border-right'>ADD</button>
    </form>
  )
}

export default Form