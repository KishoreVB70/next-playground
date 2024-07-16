import React from 'react'
import { serverFunction } from '@/utils/serverutils'

const ServerRoute = () => {
    const value = serverFunction();
  return (
    <div>ServerRoute value: {value}</div>   
  )
}

export default ServerRoute