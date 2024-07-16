"use client";
import React from 'react'

type prop = {
  error: Error,
  reset: () => void
}

const ErrorBoundary = ({error, reset}: prop) => {
  return (
    <div>
        Why error in blog page
        {error.message}
        <button onClick={reset} className="ease-in hover:-translate-y-1 hover:border-red-600 transition duration-300 hover:bg-white hover:text-black border border-white px-3 py-1 text-white" >Reload page</button>
    </div>
  )
}

export default ErrorBoundary