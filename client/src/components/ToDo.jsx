import React, {useState} from 'react';

const ToDo = ({todo}) => {

  return (
    <li>
      <div>{todo.to_do}</div>
    </li>
  )
}

export default ToDo;