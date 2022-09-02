// CORE
import React from 'react';
import { useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
// ENGINE
import {setTodo} from "../../engine/slice";

function Form() {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const todoItems = useSelector((state) => state.todo.todos);

    const createItem = () => {
        const newTodo = [...todoItems, { note: value, id: v4(), }];
        dispatch(setTodo(newTodo));
        localStorage.setItem('todo', JSON.stringify(newTodo));
        setValue('');
    }

  return (
    <form action="#" className='form' onSubmit={createItem}>
      <input type="text" className="form-input border-left" value={value} onChange={event => setValue(event.target.value)}/>
      <button className='border-right'>ADD</button>
    </form>
  )
}

export default Form