import React from 'react'
import { cookies } from 'next/headers'

const ContactIcons = () => {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  console.log(theme);

  return (
    <div>
        <div>Github</div>
        <div>Youtube</div>
        <div>Twitter</div>
        <div>Linked in maybe</div> 
    </div>
  )
}

export default ContactIcons