import React from 'react';
import "./Todo.css"
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import DeleteIcon from '@mui/icons-material/Delete';

function Todo({text, todo, todos, setTodos}) {
 
 function deleteHandler() {
  setTodos(todos.filter((element) => element.id !== todo.id));
 }
 
 function completeHandler() {
  setTodos(todos.map((element) => {
   if (element.id === todo.id) {
    return {
     ...element,
     completed: !element.completed,
    };
   }
   return element;
  }))
 }
  return (
  <div>
   <li className={ `${todo.completed ? "completed" : "todo"}`}>{text}</li>
   <button onClick={completeHandler}><FileDownloadDoneIcon/></button>
   <button onClick={deleteHandler}><DeleteIcon /> </button>
  </div>
  );
}

export default Todo;
