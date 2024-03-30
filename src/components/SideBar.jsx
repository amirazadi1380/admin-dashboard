import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faCalendar, faClose, faHome, faMailForward, faTeletype } from '@fortawesome/free-solid-svg-icons'
import SideDiv from './SideDiv'
export default function SideBar({ openSideBar, setOpenSideBar }) {
  const [openApps,setOpenApps] = useState(false)
  return (
    <div className={` bg-abi rounded-md ${openSideBar ? 'w-72 h-screen absolute top-0 left-0 opacity-100 duration-150 ease-in' : 'w-0 opacity-0 duration-150'} lg:static  lg:opacity-100   lg:w-64 lg:h-screen lg:mt-[620px] border-[0.1px]  shadow-black shadow-lg border-black/50`}>
      <div className='w-full justify-between h-20 flex items-center px-2'>
        <img src={logo} alt='logo' className='w-36' />
        <FontAwesomeIcon onClick={() => setOpenSideBar(!openSideBar)} icon={faClose} className='text-3xl cursor-pointer md:hidden' />
      </div>
      <ul className='relative flex flex-col cursor-pointer font-serif text-black/70 space-y-3'>
        <li className='w-full rounded-xl font-extrabold text-xl bg-abi border h-14 flex justify-center items-center space-x-3 text-white'><FontAwesomeIcon icon={faHome}/><p>صفحه اصلی</p> </li>
        <SideDiv><div onClick={()=>setOpenApps(!openApps)} className='flex space-x-2 group items-center'><FontAwesomeIcon icon={faAngleDown} /><p>کالا</p></div></SideDiv>
        {openApps && <div className='w-full bg-white h-36 rounded-xl text-xl flex justify-center items-center'>کالا ها</div>}
        <SideDiv><FontAwesomeIcon icon={faTeletype}/><p>چت</p></SideDiv>
        <SideDiv><FontAwesomeIcon icon={faMailForward}/><p>ایمیل</p></SideDiv>
        <SideDiv><FontAwesomeIcon icon={faCalendar}/><p>کاربران</p></SideDiv>
      </ul>
    </div>
  )
}
