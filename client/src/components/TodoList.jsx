import React, {useState} from 'react';
import ToDo from './ToDo.jsx'

const TodoList = ({toDos}) => {
  return (
  <ol>
    {toDos.map((todo, i) => {
      return <ToDo todo={todo} key={i}/>
      })}
  </ol>
  )
}

export default TodoList;