import React from 'react';
import { useState } from 'react';
// import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [massage, setMassage] = useState("");

  function loginHandler(){
    setMassage("Loading...");
    if (email == 'mg@35' && password == 'mg@35') {
      setTimeout(() => {
        
        setMassage('successfully Logined!')
      
      }, 3000);
    }else {
      setTimeout(() => {
        setMassage('Invalid credentials!')
      }, 2000);
    }
  }

  return (
    <div>
      <h1>Login Page</h1>
      <input
       type="text" 
       placeholder='Email or Username or phonenumber'
       onChange={(e) => setEmail(e.target.value)}
       /><br />
      <input
       type="password" 
       placeholder='Password'
       onChange={(e) => setPassword(e.target.value)} 
       /><br />
      <button
       onClick={loginHandler}
       >Login
       </button><br />
      { massage && <p>{massage}</p> }
        {
        //  massage === "Login" ? massage :null
        }
        <div>
          
        </div>
      <a href="">forgot-password</a>
      <p>Create new account <a href="">sign-up</a></p>
    </div>
  )
}
