import React from 'react';

function Form({ inputText, setInputText, todos, setTodos }) {
 const inputTextHandler = (e) => {
  console.log(e.target.value);
  setInputText(e.target.value);
 }
 
 function onAddButton(e) {
  e.preventDefault();
  setTodos([
   ...todos, {text: inputText, completed: false, id: Math.random()* 1000}
  ])
 }
 
  return (
   <form action="">
    <input onChange={inputTextHandler} type="text" />
    <button onClick={onAddButton}>
     <i>+</i>
    </button>
   </form>
  );
}

export default Form;
