import React, { useReducer } from 'react';
import Input from './Input';
import reducer from './reducer';
import initialState from './state';
import Todos from './Todos';
import { Container } from './styled/Container';



const Todo = () => {
  const [todos, dispatch] = useReducer(reducer, initialState);
  return (
    <Container>
        <Input dispatch={dispatch}/>
        <Todos todos={todos} />
    </Container>
  )
}

export default Todo;