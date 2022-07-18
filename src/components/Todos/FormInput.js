import React, {useState}from 'react';
import { Input } from './styled/Input';

const FormInput = ({dispatch}) => {
    const [input, setInput] = useState('');

    const inputHandler = (event)=>{
        const newValue = event.target.value
        setInput(newValue);
    }

    const submitHandler = (event)=>{
        event.preventDefault();
        dispatch({
            type:"ADD",
            payload:{name:input,isChecked:false},
        })
        setInput('');
    }

  return (
    <div>
        <form onSubmit={submitHandler} method='post'>
            <Input onChange={inputHandler} placeholder={'New todo...'}></Input>
        </form>
    </div>
  )
}

export default FormInput