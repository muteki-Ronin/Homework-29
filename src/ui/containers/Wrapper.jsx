// CORE
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// ENGINE
import { getTodos } from '../../engine/thunks';
// PARTS
import Form from '../components/Form';
import Item from '../components/Item';
import Footer from '../components/Footer';

function Wrapper() {
  const dispatch = useDispatch();
  const todoItems = useSelector((state) => state.todo.todos);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <div className='todo-list__container'>
      <div className='form-container'>
        <h1 className='form-title text_style'>TODO LIST</h1>
        <Form />
      </div>
      <div className='todos-container'>
        <h2 className='todos-title text_style'>TODOS:</h2>
        {todoItems.map((item) => <Item itemElem={item} key={item.id} />)}
      </div>
      <Footer />
    </div>
  );
}

export default Wrapper;
