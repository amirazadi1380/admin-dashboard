import React, { useState } from 'react'
import {userData} from './charts/Data'
import BarChart from './charts/BarChart'
import LineChart from './charts/LineChart'
export default function Main() {
  const [chartData,setChartData] = useState({
    labels: userData.map(item=>item.year),
    datasets:[
      {
        label : "افزایش کاربر",
        data : userData.map(item=>item.userGain),
        responsive:true,
        fill:true,
        backgroundColor:'#5d87ff',
        textColor:'white',
        color:"white"
      }
    ]
  })
  return (
    <div className='w-screen grid grid-cols-1 lg:grid-cols-2 place-items-center mt-16 '>
    <div className='w-[400px] xl:w-[500px] lg:ml-96 bg-white border-[1px] border-black/10 rounded-md shadow-xl shadow-black/30 hover:scale-105 duration-100 transition-all ease-in'><BarChart chartdata={chartData}/></div>
    <div className='w-[400px] xl:w-[500px] bg-white border-[1px] border-black/10 rounded-md shadow-xl shadow-black/30 hover:scale-105 duration-100 transition-all ease-in'><LineChart chartdata={chartData}/></div>
    </div>
  )
}

