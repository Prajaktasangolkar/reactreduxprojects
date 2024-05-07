import React,{useState} from 'react'
import axios from 'axios';


function Login() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const handleSubmit=async (e)=>{
        e.preventDefault()
        console.log(username);
        if(username==="" || password===""){
           alert('All feilds are required')
           
        }
        else{
           try {
               const response=await axios.post('http://localhost:5000/login',{
                   username:username,
                   password:password
               })
                  console.log('res',response);
           } catch (error) {
               console.log('signup failed:',error.response.data);
           }
        }
           

    }  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  )
}

export default Login