import React, {useState} from 'react';
import TodoList from './Todolist.jsx'
import Login from './Login.jsx'
import AddToDo from './AddToDo.jsx'
import axios from 'axios';

const App = () => {
  // states
  const [name, setName] = useState('Whoever you are...');
  const [term, setTerm] = useState('');
  const [toDos, setToDos] = useState([]);
  const [showLogIn, setShowLogIn] = useState(true);

  // req helper function
  const loginReq = (obj) => {
    axios.post('/login', obj)
    .then(function (res) {
      console.log(res);
      setName(obj.username);
      setShowLogIn(false);
      intialLoad({username: obj.username});
    })
    .catch(function (err) {
      console.log(err);
    });
  };

  const signupReq = (obj) => {
    axios.post('/signup', obj)
    .then((res)=> {
      console.log(res);
      setName(obj.username);
      setShowLogIn(false);
    })
    .catch((err)=>{
      console.log(err);
    })
  };

  const saveReq = (arr) => {
    axios.post('/save-to-do-list', arr)
    .then((res)=> {
      console.log(res);
    })
    .catch((err)=> {
      console.log(err);
    })
  }

  const intialLoad = (obj) => {
    axios.get('/saved', obj)
    .then((res)=> {
      console.log('to do list loaded from server');
      setToDos(res.data);
    })
    .catch((err)=> {
      console.log(err);
    })
  }

  // helper function

  return (
    <div>
      <h1>Hello!</h1>
      <div className ="name" >{name}</div>
      {showLogIn ? <Login setName={setName} loginReq={loginReq} signupReq={signupReq}/>: null}
      {!showLogIn ? <button id="sign-out-button" onClick={()=>{
        setName('Whoever you are...');
        setToDos([]);
        setShowLogIn(true);
      }}>sign out</button>: null}
      {!showLogIn ? <AddToDo setToDos={setToDos} name={name} toDos={toDos}/>: null}
      {!showLogIn ? <button id="save-to-server" onClick={()=>{saveReq(toDos)}}>save</button>: null}
      {!showLogIn ? <TodoList toDos={toDos}/>: null}
    </div>
  )
}

export default App;