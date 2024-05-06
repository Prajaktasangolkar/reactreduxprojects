import React, {  useState } from 'react'
import {useDispatch} from 'react-redux'
import { addPost } from '../context/PostContext'

function CreatePost() {
  const [username,setUsername]=useState('')
  const[title,setTitle]=useState('')
  const [content,setContent]=useState('')
  

  const dispatch=useDispatch()
  const handleClick=(e)=>{
        e.preventDefault()
        dispatch(addPost({username,title,content}))
        setUsername('')
        setTitle('')
        setContent('')
  }

  return (
    <form className="create-post" >
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your User name here
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          placeholder="Your User Id"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you feeling today..."
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          rows="4"
          className="form-control"
          id="body"
          placeholder="Tell us more about it"
          value={content}
          onChange={(e)=>setContent(e.target.value)}
        />
      </div>


      <button type="submit" className="btn btn-primary" onClick={handleClick}>
        Post
      </button>
    </form>
  )
}

export default CreatePost