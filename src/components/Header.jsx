import React, { useState } from 'react'
import HeaderDiv from './HeaderDiv'
import useFetch from './useFetch'
import bag from '../assets/bag.svg'
import icon from '../assets/icon.svg'
import star from '../assets/star.svg'
import mailbox from '../assets/icon-mailbox.svg'
export default function Header() {
  const {products,users} = useFetch();
  let totall_price = products.reduce((prev,curr)=>prev + curr.price,0);
  return (
    <div className='grid place-items-center grid-cols-1 md:grid-cols-2 md:place-items-end gap-4 xl:gap-0 xl:px-10 ml-36 mr-10 xl:mr-0 xl:grid-cols-4 font-serif '>
      <HeaderDiv>
        <img src={bag} alt="bag" />
        <h1>تعداد کالا ها</h1>
        <p className=' font-sans font-extrabold text-4xl text-blue-700'>{products.length}</p>
      </HeaderDiv>
      <HeaderDiv>
        <img src={icon} alt="icon" />
      <h1>تعداد کاربران</h1>
      <p className='font-sans font-extrabold text-blue-700 text-4xl'>{users.length}</p>
      </HeaderDiv>
      <HeaderDiv>
        <img src={star} alt="star" />
        <h1>قیمت کل کالا ها</h1>
        <p className='font-sans font-extrabold text-blue-700 text-4xl'>{totall_price}$</p>
      </HeaderDiv>
      <HeaderDiv>
        <img src={mailbox} alt="mailbox" />
        <h1>سفارشات</h1>
        <p className='font-sans font-extrabold text-blue-700 text-4xl'>21</p>
      </HeaderDiv>
    </div>
  )
}
