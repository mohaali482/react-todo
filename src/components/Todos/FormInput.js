import React, {useState}from 'react';
import { Button } from './styled/Button';
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
            payload:{
                name:input,
                isChecked:false
            }
        })
        setInput('');
    }

  return (
    <div>
        <form onSubmit={submitHandler} method='post'>
            <div style={{'position': 'relative'}}>
            <Input onChange={inputHandler} placeholder={'New todo...'} value={input}></Input>
            <Button>Add</Button>
            </div>
        </form>
    </div>
  )
}

export default FormInput