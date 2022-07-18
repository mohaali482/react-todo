import React, {useState, useReducer }from 'react';
import reducer from './reducer';

const Input = ({dispatch}) => {
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
            <label>New Todo</label>
            <input className='todo-input' onChange={inputHandler} value={input}></input>
        </form>
    </div>
  )
}

export default Input