import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import { Doughnut } from 'react-chartjs-2'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts'

const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
      ],
      hoverOffset: 4,
    },
  ],
}

const ChartPie = () => {
  return (
    <div>
      <Doughnut
        options={{
          type: 'doughnut',
          data: data,
        }}
        data={data}
      />
    </div>
    // <div>
    //   <div className="">
    //     <ResponsiveContainer width="100%" height="100%">
    //       <PieChart width={400} height={400}>
    //         <Pie
    //           data={data01}
    //           dataKey="value"
    //           cx="50%"
    //           cy="50%"
    //           outerRadius={60}
    //           fill="#8884d8"
    //         />
    //       </PieChart>
    //     </ResponsiveContainer>
    //   </div>
    // </div>
  )
}

export default ChartPie
