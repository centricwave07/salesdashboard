import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { name: 'Jan', uv: 300, pv: 100, amt: 100 },
  { name: 'Feb', uv: 100, pv: 200, amt: 300 },
  { name: 'Mar', uv: 100, pv: 200, amt: 300 },
  { name: 'Apr', uv: 400, pv: 100, amt: 100 },
  { name: 'May', uv: 100, pv: 200, amt: 200 },
  { name: 'Jun', uv: 200, pv: 400, amt: 400 },
  { name: 'Jul', uv: 100, pv: 200, amt: 100 },
  { name: 'Aug', uv: 200, pv: 300, amt: 200 },
  { name: 'Sep', uv: 300, pv: 400, amt: 300 },
  { name: 'Oct', uv: 300, pv: 100, amt: 300 },
  { name: 'Nov', uv: 400, pv: 200, amt: 400 },
  { name: 'Dec', uv: 100, pv: 300, amt: 100 },
]

const CustomizedDot = (props: any) => {
  const { cx, cy, stroke, payload, value } = props

  return (
    <svg
      x={cx - 10}
      y={cy - 10}
      width={20}
      height={20}
      fill="green"
      viewBox="0 0 1024 1024"
    ></svg>
  )
}

const payload = [
  { id: '1', value: 'Loyal Customers', type: 'square', color: '#A700FF' },
  { id: '2', value: 'New Customers', type: 'square', color: '#EF4444' },
  { id: '3', value: 'Unique Customers', type: 'square', color: '#3CD856' },
]
const renderLegend = () => {
  return (
    <ul className="flex justify-center mt-5 gap-x-2">
      {payload.map((entry: any, index: any) => (
        <li key={`item-${index}`} className="flex gap-x-1">
          <div
            className="h-3 w-4 rounded"
            style={{ backgroundColor: entry.color }}
          ></div>
          <div className="text-xs leading-3">{entry.value}</div>
        </li>
      ))}
    </ul>
  )
}

function LineChartComponent() {
  return (
    <div style={{ width: '100%', height: '250px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          id="line-chart-1"
          width={600}
          height={200}
          data={data}
          margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
        >
          <CartesianGrid vertical={false} />
          <XAxis axisLine={false} tickLine={false} dataKey="name" />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip />
          <Legend content={renderLegend} />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            dot={<CustomizedDot />}
          />
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#82ca9d"
            dot={<CustomizedDot />}
          />
          <Line
            type="monotone"
            dataKey="amt"
            stroke="#F64E60"
            dot={<CustomizedDot />}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default LineChartComponent
