import React from 'react'
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {
    name: 'Monday',
    onlineSale: 7500,
    offlineSale: 7500,
  },
  {
    name: 'Tuesday',
    onlineSale: 7500,
    offlineSale: 1398,
  },
  {
    name: 'Wednesday',
    onlineSale: 2000,
    offlineSale: 9800,
  },
  {
    name: 'Thursday',
    onlineSale: 2780,
    offlineSale: 3908,
  },
  {
    name: 'Friday',
    onlineSale: 1890,
    offlineSale: 4800,
  },
  {
    name: 'Saturday',
    onlineSale: 2390,
    offlineSale: 3800,
  },
  {
    name: 'Sunday',
    onlineSale: 3490,
    offlineSale: 4300,
  },
]

function BarChartComponent() {
  const getPath = (
    x: any,
    y: any,
    width: any,
    height: any,
    borderRadius = 2,
  ) => {
    const radius = Math.min(borderRadius, height / 2)
    const path = `
      M ${x},${y + height}
      L ${x},${y + radius}
      Q ${x},${y} ${x + radius},${y}
      L ${x + width - radius},${y}
      Q ${x + width},${y} ${x + width},${y + radius}
      L ${x + width},${y + height}
      Z
    `
    return path
  }

  const TriangleBar = (props: any) => {
    const { fill, x, y, width, height } = props

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />
  }

  return (
    <div style={{ width: '100%', height: '250px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          id="bar-chart-1"
          width={550}
          height={192}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
          style={{ fontSize: '12px' }}
        >
          <CartesianGrid vertical={false} />
          <XAxis axisLine={false} tickLine={false} dataKey="name" />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip />
          <Bar
            type="monotone"
            dataKey="offlineSale"
            fill="#0095FF"
            shape={<TriangleBar />}
          />
          <Bar
            type="monotone"
            dataKey="onlineSale"
            fill="#00E096"
            shape={<TriangleBar />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarChartComponent
