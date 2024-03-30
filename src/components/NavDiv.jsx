import React from 'react'

export default function NavDiv({ children }) {
    return (
        <div className='hover:bg-black/10 cursor-pointer w-16 flex justify-center p-1 h-16 items-center rounded-full'>
            {children}
        </div>
    )
}
