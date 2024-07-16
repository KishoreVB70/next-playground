"use client"
import { serverFunction } from '@/utils/serverutils'
import React from 'react'

const ClientRoute = () => {
    const value = serverFunction();
  return (
    <div>ClientRoute  {value}</div>
  )
}

export default ClientRoute