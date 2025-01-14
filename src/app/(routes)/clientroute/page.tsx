"use client"
import { useTheme } from '@/components/ThemeProvider'
import { useRouter } from 'next/navigation';
import React from 'react'

const ClientRoute = () => {
  const theme = useTheme();
  const router = useRouter();
  console.log(theme);

  return (
    <div >
      <h1 style={{color: theme.primaryColor}}  >Theme color</h1>
      <button onClick={() => router.push("/login")} className="ease-in hover:-translate-y-1 hover:border-red-600 transition duration-300 hover:bg-white hover:text-black border border-white px-3 py-1 text-white" >Login</button>
    </div>
  )
}

export default ClientRoute