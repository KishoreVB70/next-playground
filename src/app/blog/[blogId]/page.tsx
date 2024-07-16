import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import React from 'react'

type props = {
  params: {
    blogId: string;
  };
}

// export const generateMetaData = ({params}: props):Metadata => {
//   return {
//     title: `Blog ${params.blogId}`,
//   }
// }

const Id = ({params}: props) => {
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