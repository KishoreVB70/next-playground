import React from 'react'

const Id = ({params}: {params: {id: string}}) => {
  return (
    <div>Welcome to the blog {params.id}</div>
  )
}

export default Id