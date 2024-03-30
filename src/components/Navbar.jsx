import React, { useState } from 'react'
import user from '../assets/user-1.jpg'
import british from '../assets/british.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faArrowDown, faArrowDownUpLock, faArrowTurnDown, faArrowsDownToLine, faBars, faBell, faBellConcierge, faRing, faSearch, faTurnDown, faUpDown } from '@fortawesome/free-solid-svg-icons'
import NavDiv from './NavDiv'
import SideBar from './SideBar'
export default function Navbar() {
    const [openSideBar,setOpenSideBar] = useState(false)
    return (
        <div className='flex w-screen h-20  justify-between items-center px-2 relative'>
            <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar}/>
            <div className='flex space-x-0 items-center   w-96  mr-36 text-xl md:mr-64 xl:mr-[600px]'>
                <NavDiv><FontAwesomeIcon onClick={()=>setOpenSideBar(!openSideBar)} icon={faBars} className=' px-4'/></NavDiv>
                <NavDiv><FontAwesomeIcon icon={faSearch} className='px-4'/></NavDiv>
                <ul className='hidden relative md:flex space-x-6 pl-5 cursor-pointer font-serif text-black/70'>
                        <li><div className='flex space-x-2 group items-center'><FontAwesomeIcon icon={faAngleDown}/><p>کالا</p><div className='w-96 h-96 bg-abi rounded-md shadow-black/60 border-black/10 border-[0.5px] shadow-lg hidden group-hover:flex absolute top-6 left-0'></div></div></li>
                        <li>چت</li>
                        <li>ایمیل</li>
                        <li>کاربران</li>
                </ul>
                
            </div>
            <div className='flex'>
                <NavDiv>
                    <img src={british} alt="user" className='rounded-full' />
                </NavDiv>
                <NavDiv>
                    <FontAwesomeIcon icon={faBell} className='text-2xl' />
                </NavDiv>
                <NavDiv>
                    <img src={user} alt="user" className='rounded-full' />
                </NavDiv>
            </div>
        </div>
    )
}
