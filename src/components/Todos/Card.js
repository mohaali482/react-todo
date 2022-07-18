import React from 'react'
import { CenteredDiv } from './styled/CenteredDiv'
import { ListItem } from './styled/ListItem'

const Card = () => {
    
  return (
    <ListItem>
        <p>
          <span>1.</span>
          Todo.........
        </p>
        <CenteredDiv>
          <button>check</button>
          <button>edit</button>
          <button>delete</button>
        </CenteredDiv>
    </ListItem>
  )
}

export default Card