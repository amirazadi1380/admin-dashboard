import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Detail({open,setOpen,selectedUser,users}) {
  return (
 <div className={`${open && 'fixed inset-0 bg-black/60 top-0 flex justify-center items-center'}`}>
        <div className={`${open ? 'w-[500px] opacity-100 duration-150 ease-in transition-all h-96 ' : 'opacity-0 w-0 h-0 invisible'}rounded-md bg-white shadow-2xl shadow-black relative flex flex-col justify-center items-center`}>
            <FontAwesomeIcon onClick={()=>setOpen(false)} icon={faClose} className='cursor-pointer text-5xl absolute right-5 top-3'/>
            {users.filter(user=>user.id == selectedUser).map((user,index)=><div key={index} className='flex justify-center flex-col items-center font-extrabold text-black'>
                <img src={user.image} alt="profile" className='w-36 h-36' />
                <h1>first name : {user.firstName}</h1>
                <h1>last name : {user.lastName}</h1>
                <p>age : {user.age}</p>
            </div>)}
        </div>
    </div>
  )
}
