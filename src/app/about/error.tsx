"use client"
import React from 'react'

const AboutError = ({error}: {error: Error}) => {
  return (
    <div>The error in the about page is: {error.message}</div>
  )
}

export default AboutError