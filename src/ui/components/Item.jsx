// CORE
import React from 'react'

function Item({ itemElem }) {
  return (
    <div className='todo'>
      <label className='todo-label'>
        <input type="checkbox" className='todo-checkbox' />
        <div className='todo-text'>{itemElem.note}</div>
      </label>
      <button className='border-left'>EDIT</button>
      <button className='border-right'>DELETE</button>
    </div>
  )
}

export default Item;