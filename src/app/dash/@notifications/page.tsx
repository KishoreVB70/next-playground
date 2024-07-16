import React from 'react'
import Link from 'next/link'

const Notifications = () => {
  return (
    <div>
        Notifications
        <Link href={"/dash/archivednoti"}>Go to archived</Link>

    </div>
  )
}

export default Notifications