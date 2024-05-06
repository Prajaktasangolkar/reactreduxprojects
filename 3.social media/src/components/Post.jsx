import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletePost } from '../context/PostContext'

function Post() {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.post.posts)
  console.log('posts',posts);
  const remove = (id) => {
    dispatch(deletePost(id))
  }
  
  return (
    <>
    
      {posts &&
        posts.map((post) => (
          <div className="card post-card" style={{ width: "30rem" }} key={post.id}>
            <div className="card-body">
              <h5 className="card-title">
                {post.title}
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"></span>
              </h5>
              <p className="card-text">{post.content}</p>

              <div className="alert alert-success reactions" role="alert">
                This post has been reacted by {post.username} people.
              </div>
              <button onClick={() => remove(post.id)}>Remove</button>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default Post
