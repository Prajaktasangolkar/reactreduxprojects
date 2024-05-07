import React, { useState } from 'react'
import axios from 'axios';

function Signup() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState('')

    const handleSubmit=async (e)=>{
             e.preventDefault()
             console.log(username);
             if(username==="" || password===""){
                alert('All feilds are required')
                setError('All feilds are required')
             }
             else{
                try {
                    const response=await axios.post('http://localhost:5000/signup',{
                        username:username,
                        password:password
                    })
                   console.log(response);
                    
                } catch (error) {
                    console.log('signup failed:',error.response.data);
                }
             }
    }


  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
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
      <button type="submit">Signup</button>
    </form>
  )
}

export default Signup