
import { useState } from "react";
import { toggleTodo, updateTodo } from "../redux/actions";
import { deleteTodo } from "../redux/actions";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


import { useDispatch } from "react-redux";

const Todo = ({ todo }) => {

  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(todo.data);

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
      e.preventDefault();

      setEdit(prevState => !prevState);

      dispatch(updateTodo(todo._id, text))
  }

    
    return (
      <li
      className="task"
      onClick={() => dispatch(toggleTodo(todo._id))}
      style={{
          textDecoration: todo.done ? 'line-through' : '',
          color: todo.done ? '#bdc3c7' : '#34495e'
      }}
     
  >
      <span style={{ display: edit ? 'none' : '' }}>{todo.data}</span>

      <form
          style={{ display: edit ? 'inline' : 'none' }}
          onSubmit={onFormSubmit}
      
      >
          <input
              type="text"
              value={text}
              className="edit-todo"
              onChange={(e) => setText(e.target.value)}
          />
      </form>
           
           



            <span className="icon" onClick={() => dispatch(deleteTodo(todo._id))}>
                        <DeleteIcon/>
            </span>
            <span className="icon" onClick={() => setEdit(prevState => !prevState)}>
                <EditIcon/>
            </span>
        </li>
    )
}

export default Todo;
