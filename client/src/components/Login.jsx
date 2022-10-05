import React, {useState} from 'react';

const Login = ({setName, signupReq, loginReq}) => {
  const [userNInput, setUserNInput] = useState('');
  const [passInput, setPassInput] = useState('');

  const loginReqWrap = ()=>{
    let obj = {username: userNInput, password: passInput};
    loginReq(obj)
  };

  const signupReqWrap = ()=>{
    let obj = {username: userNInput, password: passInput};
    signupReq(obj)
  };


  return (
    <div>
    <input id='user-name' placeholder='username' value={userNInput} type='text' onChange={(e)=>(setUserNInput(e.target.value))}></input>
    <input id='password' placeholder='password' value={passInput} type='password' onChange={(e)=>(setPassInput(e.target.value))}></input>
    <button id='login-button' onClick={loginReqWrap}>login</button>
    <button id='sign-up' onClick={signupReqWrap}>signup</button>
    </div>
  )
}

export default Login;