import React from 'react'

const Docs = ({params}: {params: {slugs: string[]}}) => {
  const {slugs} = params;
  return (
    <div>
      This is the documentation home page with
      {slugs?.length === 1 && <h1>Welcome to the Concept {slugs[0]} page</h1>}
      {slugs?.length === 2 && <h1>Welcome to the Example {slugs[1]} page of concept{slugs[0]}</h1>}
    </div>
  )
}

export default Docs