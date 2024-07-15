import { notFound } from 'next/navigation'
import React from 'react'

const Id = ({params}: {params: {blogId: string}}) => {
  return (

    <div>
      {parseInt((params.blogId)) < 100
        ?<h1>Welcome to the blog {params.blogId}</h1>
        :notFound()
      }
    </div>
  )
}

export default Id