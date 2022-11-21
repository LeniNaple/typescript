import React, {useState} from 'react';
import './App.css';
import InputForm from './components/InputForm';
import TodoList from './components/TodoList';
import { Todo } from './models/todoModel';


const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      
      setTodos(currentTodos => [...currentTodos, { id: Date.now(), text: todo, isCompleted: false }])
      
    }

  return (
    <div className='mt-3 d-flex justify-content-center'>
      <div className='container'>
          <h1 style={{textAlign: "center"}} >Todo List</h1>
          <InputForm todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
          <TodoList items={todos} />
      </div>
    </div>
  );
}

export default App;
