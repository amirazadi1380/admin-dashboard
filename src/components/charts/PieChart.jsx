import React from 'react'
import { Pie } from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'
export default function PieChart({chartdata}) {
  return (
    <Pie data={chartdata}/> 
  )
}
