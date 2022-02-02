import { useState } from "react";
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <div className="content">
        <Header />
      <h1 className="header">Tanvir's TODO</h1>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos} setInputText={setInputText}/>
      </div>
      
    </div>
  );
}

export default App;
