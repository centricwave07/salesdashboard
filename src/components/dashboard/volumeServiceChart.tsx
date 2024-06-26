import React from 'react'
import { YAxis, BarChart, Bar } from 'recharts'

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]

function VolumeServiceChart() {
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
    <div style={{ width: '100%' }}>
      <BarChart
        width={371}
        height={200}
        data={data}
        barSize={12}
        margin={{
          top: 20,
          right: 0,
          left: -60,
          bottom: 5,
        }}
      >
        <YAxis tick={false} axisLine={false} tickLine={false} />
        <Bar dataKey="pv" stackId="a" fill="#0095FF" shape={<TriangleBar />} />
        <Bar dataKey="uv" stackId="a" fill="#00E096" shape={<TriangleBar />} />
      </BarChart>
    </div>
  )
}

export default VolumeServiceChart
