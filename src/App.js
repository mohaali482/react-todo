import React from 'react'
import './App.css';
import Todo from './components/Todos';

const App = () => {
  return (
    <div className="App">
        <header>
            Todos
        </header>
        <Todo />
    </div>
  )
}

export default App