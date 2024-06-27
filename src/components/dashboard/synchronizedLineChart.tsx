import React from 'react'
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from 'recharts'

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

const CustomDot = (props: any) => {
  const { cx, cy, stroke, payload, value, fill } = props
  return (
    <circle cx={cx} cy={cy} r={4} stroke={stroke} strokeWidth={2} fill={fill} />
  )
}

function SynchronizedLineChartComponent() {
  return (
    <div style={{ width: '100%', height: '200px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={390}
          height={165}
          data={data}
          margin={{ top: 10, right: 0, left: -60, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0095FF" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#0095FF" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            tick={false}
            axisLine={false}
            tickLine={false}
            dataKey="name"
          />
          <YAxis tick={false} axisLine={false} tickLine={false} />
          <CartesianGrid vertical={false} horizontal={false} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#0095FF"
            fillOpacity={100}
            fill="url(#colorUv)"
            dot={<CustomDot fill="#0095FF" />}
          />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#82ca9d"
            fillOpacity={100}
            fill="url(#colorPv)"
            dot={<CustomDot fill="#82ca9d" />}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default SynchronizedLineChartComponent
