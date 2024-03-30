import React from 'react'

export default function HeaderDiv({children}) {
  return (
    <div className='w-52 h-32 flex justify-center items-center text-xl flex-col bg-abi/30 space-y-2 rounded-md shadow-md shadow-black/20'>
        {children}
    </div>
  )
}
