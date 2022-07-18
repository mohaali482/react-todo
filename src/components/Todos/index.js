import React, { useReducer } from 'react';
import Input from './Input';
import reducer from './reducer';
import initialState from './state';
import Todos from './Todos';
import { Container } from './styled/Container';
import { TitleHeader } from './styled/TitleHeader';



const Todo = () => {
  const [todos, dispatch] = useReducer(reducer, initialState);
  return (
    <Container>
        <TitleHeader>Todos</TitleHeader>
        <Input dispatch={dispatch}/>
        <Todos todos={todos} />
    </Container>
  )
}

export default Todo;