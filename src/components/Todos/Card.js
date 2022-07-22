import React from 'react'
import { CenteredDiv } from './styled/CenteredDiv'
import { ListItem } from './styled/ListItem'
import { ReactComponent as CancelLogo } from '../../assests/icons/cancel.svg'
import { ReactComponent as CheckLogo } from '../../assests/icons/check.svg'
import { ReactComponent as DeleteLogo } from '../../assests/icons/delete.svg'

const Card = ({todo, index, handleDelete, handleCheck, handleUnCheck}) => {
  return (
    <ListItem>
        <p style={{'fontWeight': 'bold', 'paddingLeft': '20px'}}>
          <span>{index+1} </span>
          {todo.name}
        </p>
        <CenteredDiv>
          {
          todo.isChecked ? 
          <button onClick={()=> handleUnCheck(todo.id)} style={{'border':'none', 'background':'none'}}>
            {<CancelLogo />}
          </button> :
          <button onClick={()=> handleCheck(todo.id)} style={{'border':'none', 'background':'none'}}>
            {<CheckLogo />}
          </button>
          }
          <button onClick={()=> handleDelete(todo.id)} style={{'border':'none', 'background':'none'}}>
            {<DeleteLogo />}
          </button>
        </CenteredDiv>
    </ListItem>
  )
}

export default Card