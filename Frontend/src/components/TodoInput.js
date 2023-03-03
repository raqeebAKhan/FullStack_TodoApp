import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNewTodo } from '../redux/actions';

function TodoInput() {
    const [text, setText] = useState("");

    const dispatch = useDispatch();

    const onInputSubmit = (e) => {
      e.preventDefault();

      dispatch(addNewTodo(text));
        setText('');
    }

    const onInputChange = (e) => {
        setText(e.target.value);

    }

  return (
    <div>
    <form className='form' onSubmit={onInputSubmit}>
        <input placeholder='Enter Todos' className='input' onChange={onInputChange} value={text}/>
    </form>
      
    </div>
  )
}

export default TodoInput
