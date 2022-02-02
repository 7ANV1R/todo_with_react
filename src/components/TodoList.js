import React from 'react';
import Todo from './Todo';

function TodoList({todos, setTodos, setInputText}) {
  return <div>
   <ul>
     {
       todos.map((todo) => (
         <Todo  text={todo.text} key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
       )).reverse()
     }

   </ul>
  </div>;
}

export default TodoList;
