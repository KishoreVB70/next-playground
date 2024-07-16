import React from 'react'

const ErrorBoundary = ({error}: {error: Error}) => {
  return (
    <div>ErrorBoundary in blog page - {error.message}</div>
  )
}

export default ErrorBoundary