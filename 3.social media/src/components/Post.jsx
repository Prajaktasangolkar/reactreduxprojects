import React from 'react'

function Post() {
  return (
    <div className="card post-card" style={{ width: "30rem" }}>
    <div className="card-body">
      <h5 className="card-title">
        title
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          
        >
        
        </span>
      </h5>
      <p className="card-text">body</p>
     
      <div className="alert alert-success reactions" role="alert">
        This post has been reacted by  people.
      </div>
    </div>
  </div>
  )
}

export default Post