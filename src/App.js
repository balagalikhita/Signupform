import React,{useState} from 'react'
import './App.css'
import axios from 'axios'
const App = () => {
  const [data,setData]=useState({
    username:'',
    password:'',
    confirmPassword:'',
    phonenumber:''
  });
  const {username,password,confirmPassword,phonenumber}=data;
  const changehandler =e=>{
setData({...data,[e.target.name]:e.target.value})
  }
  const submitHandler=e=>{
    e.preventDefault();
    console.log(data);
    axios.post('',data).then(()=>alert("Sign up successfully"));
  }
  return (
    <div className='container'>
      <center>
      <form onSubmit={submitHandler}> 
        <h2>Sign Up</h2>
        <input type='text' name="username" value={username} placeholder="username" onChange={changehandler} required/><br/>
        <input type='tel' name="phonenumber" value={phonenumber} placeholder="phonenumber" onChange={changehandler} required/><br/>
      <input type='password' name="password" value={password} placeholder="password" onChange={changehandler} required/><br/>
      <input type='password' name="confirmPassword" value={confirmPassword} placeholder="confirmPassword" onChange={changehandler} required/><br/>
      {password!==confirmPassword?<p style={{"color":"red","fontSize":"10px"}}>Passwords are not matching</p>:null}
      <input className="submit" type="submit" name="submit"/>

      </form>
      </center>
    </div>
  )
}

export default App