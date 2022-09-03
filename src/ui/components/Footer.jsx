// CORE
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// ENGINE
import { deleteAllTodo } from '../../engine/thunks';
import Selectors from '../../engine/selectors';

function Footer() {
    const todoItems = useSelector(Selectors.todos);
    const dispatch = useDispatch();

    const onDeleteAll = () => {
        dispatch(deleteAllTodo());
    }

    return (
        <footer>
            Items: {todoItems.length}
            <button className='btn-del_all' onClick={onDeleteAll}>DELETE ALL TODO</button>
        </footer>
    )
}

export default Footer;