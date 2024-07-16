"use client"
import { useTheme } from '@/components/ThemeProvider'
import { serverFunction } from '@/utils/serverutils'
import React from 'react'

const ClientRoute = () => {
  const theme = useTheme();
    // const value = serverFunction();
  return (
    <div style={{color: theme.primaryColor}} >ClientRoute</div>
  )
}

export default ClientRoute