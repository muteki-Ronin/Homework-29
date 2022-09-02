// CORE
import React from 'react';
import { useSelector } from 'react-redux';

function Footer () {
    const todoItems = useSelector((state) => state.todo.todos);

    return (
        <footer>
            Items: {todoItems.length}
        </footer>
    )
}

export default Footer;