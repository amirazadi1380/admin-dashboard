import React from 'react'
import { Line } from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'
export default function LineChart({chartdata}) {
  return (
    <div><Line data={chartdata}/></div>
  )
}
