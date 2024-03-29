import React from 'react'
import Card from './Card'
import { CenteredDiv } from './styled/CenteredDiv'

const Todos = ({todos, dispatch}) => {
  const handleDelete = (id)=>{
    dispatch({
      type:"DELETE",
      payload:{
        id
      }
    })
  }

  const handleCheck = (id)=>{
    dispatch({
      type:"COMPLETE",
      payload:{
        id
      }
    })
  }

  const handleUnCheck = (id)=>{
    dispatch({
      type:"UNCOMPLETE",
      payload:{
        id
      }
    })
  }

  return (
    <CenteredDiv>
      <div style={{'width': '90%'}}>
        {todos.map((todo, index)=>{
            return (
              todo && <Card key={todo.id} todo={todo} index={index}
            handleDelete={handleDelete} handleCheck={handleCheck}
            handleUnCheck={handleUnCheck}/>
            )
        })}
      </div>
    </CenteredDiv>
  )
}

export default Todos