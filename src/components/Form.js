import React from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import "./Form.css"
function Form({ inputText, setInputText, todos, setTodos }) {
 const inputTextHandler = (e) => {
  console.log(e.target.value);
  setInputText(e.target.value);
 }
 
 function onAddButton(e) {
  e.preventDefault();
  setTodos([
   ...todos, {text: inputText, completed: false, id: Math.random()* 1000}
  ]);
  setInputText('');
 }
 
  return (
    <div >
      <form action="">
        <div className="form-body">
        <input className='input-box' value={inputText} onChange={inputTextHandler} type="text" />
    <button className='add-btn' onClick={onAddButton}>
     <AddBoxIcon />
    </button>
        </div>
        
      </form>
      
    
   
    </div>
   
  );
}

export default Form;
