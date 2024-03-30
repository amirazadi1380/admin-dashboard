import React, { useState } from 'react'
import useFetch from './useFetch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputer } from '@fortawesome/free-solid-svg-icons'
import Detail from './Detail'
import PieChart from './charts/PieChart'
import {userData} from './charts/Data'
export default function Users() {

 const [chartData,setChartData] = useState({
    labels: userData.map(item=>item.year),
    datasets:[
      {
        label : "افزایش کاربر",
        data : userData.map(item=>item.userGain),
        responsive:true,
        fill:true,
        backgroundColor:['blue','green','brown','red','pink']
      
      }
    ]
  })
    const { users,isLoading,errText } = useFetch()
    const [selectedUser, setSelectedUser] = useState(0)
    const [open, setOpen] = useState(false)
    return (
        <div className=' h-screen w-screen justify-center items-center relative'>
            {errText && <h1 className='text-red-600'>{errText}</h1>}
            <div className='w-96 absolute left-64 top-36 hidden md:flex'><PieChart chartdata={chartData}/></div>
            <div className='w-[500px]  h-96 overflow-y-scroll absolute right-20 lg:right-36 top-0 mt-36 flex flex-col bg-abi border shadow-xl rounded-xl font-serif'>
                <Detail open={open} setOpen={setOpen} selectedUser={selectedUser} users={users} />
                <div className='w-full h-36 border font-serif flex justify-center items-center space-x-5 font-extrabold py-6 text-5xl'><p>لیست مدیریت کاربران</p><FontAwesomeIcon icon={faComputer} /></div>
                {isLoading ? <h1>loading data wait or change proxy...</h1> : users.map((user, index) => <div className='w-full h-auto py-3 border items-center flex justify-between px-3 text-black shadow-xl' key={index}>
                    <div className='flex space-x-3'>
                        <img src={user.image} alt="profile" />
                        <p>{user.firstName}</p>
                    </div>
                    <div className='flex space-x-1'>
                        <button className='bg-red-600 w-16 h-10 rounded-lg shadow-xl shadow-white/10 hover:bg-white cursor-pointer'>حذف</button>
                        <button onClick={() => {
                            setSelectedUser(user.id)
                            console.log(selectedUser)
                            setOpen(true)
                        }} className='bg-green-500 w-16 h-10 rounded-lg shadow-xl shadow-white/10 hover:bg-white cursor-pointer'>بررسی</button>

                    </div>
                </div>)}
            </div>
        </div>
    )
}
