// CORE
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// ENGINE
import { handleDeleteAll } from '../../engine/thunks';

function Footer() {
    const todoItems = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();

    const onDeleteAll = () => {
        dispatch(handleDeleteAll());
    }

    return (
        <footer>
            Items: {todoItems.length}
            <button className='btn-del_all' onClick={onDeleteAll}>DELETE ALL TODO</button>
        </footer>
    )
}

export default Footer;