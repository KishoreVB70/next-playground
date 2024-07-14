import React from 'react'

const Id = ({params}: {params: {blogId: string}}) => {
  return (
    <div>Welcome to the blog {params.blogId}</div>
  )
}

export default Id