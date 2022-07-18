import React, { useReducer } from 'react';
import Input from './Input';
import reducer from './reducer';
import initialState from './state';
import Todos from './Todos';



const Todo = () => {
  const [todos, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
        <Input dispatch={dispatch}/>
        <Todos todos={todos} />
    </div>
  )
}

export default Todo;