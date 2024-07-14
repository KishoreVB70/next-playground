import React from 'react'

const commentId = ({params}: {params: {commentId: string, blogId: string}}) => {
  return (
    <div>This is the {params.commentId} comment for the {params.blogId} blog and it is good</div>
  )
}

export default commentId