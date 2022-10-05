import React, {useState} from 'react';

const AddToDo = ({setToDos, name, toDos}) => {
  const [addInput, setAddInput] = useState('');

  const addToDo = () => {
    if(addInput.length === 0){
      return;
    }
    let obj = {to_do: addInput, done: false, username: name};
    let newArr = toDos.slice()
    newArr.push(obj);
    setToDos(newArr);
  }

  return (
    <div>
      <input id="add-to-do" type="text" value={addInput} onChange={(e)=>(setAddInput(e.target.value))} placeholder="type your to do"></input>
      <button id='add-to-do-button' onClick={addToDo}>add</button>
    </div>
  )
}

export default AddToDo;