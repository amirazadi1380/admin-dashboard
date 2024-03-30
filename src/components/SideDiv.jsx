import React from 'react'

export default function SideDiv({children}) {
  return (
    <li className='w-full rounded-xl font-extrabold text-xl hover:bg-black/10  h-14 flex justify-center items-center space-x-3 shadow-black/10 shadow-md'>{children}</li>
  )
}
