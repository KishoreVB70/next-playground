import React from 'react'

const commentId = ({params}: {params: {commentId: string}}) => {
  return (
    <div>This is the {params.commentId} comment and it is good</div>
  )
}

export default commentId