"use client";
import { useRouter } from 'next/navigation';
import React from 'react'

// export const metadata = {title: "about kishore"};
const About = () => {
  const router = useRouter();
  return (
    <div className='h-[80vh] flex justify-center items-center' >
      <button onClick={() => router.push("/login")} className="ease-in hover:-translate-y-1 hover:border-red-600 transition duration-300 hover:bg-white hover:text-black border border-white px-3 py-1 text-white" >Login</button>
    </div>
  )
}

export default About