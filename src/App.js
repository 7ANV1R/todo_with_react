import { useState } from "react";
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <h1>Tanvir's TODO</h1>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos} setInputText={setInputText}/>
    </div>
  );
}

export default App;
