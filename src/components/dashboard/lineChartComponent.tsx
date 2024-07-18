"use client"

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "Jan", desktop: 186,  mobile: 100, others: 200 },
  { month: "Feb", desktop: 305,  mobile: 300, others: 100 },
  { month: "Mar", desktop: 237,  mobile: 200, others: 250 },
  { month: "Apr", desktop: 73,  mobile: 400, others: 300 },
  { month: "May", desktop: 209,  mobile: 300, others: 150 },
  { month: "Jun", desktop: 214,  mobile: 250, others: 280 },
  { month: "Jul", desktop: 218,  mobile: 130, others: 320 },
  { month: "Jun", desktop: 220,  mobile: 350, others: 220 },
  { month: "Jul", desktop: 225,  mobile: 100, others: 330 },
  { month: "Aug", desktop: 230,  mobile: 180, others: 400 },
  { month: "Sep", desktop: 232,  mobile: 280, others: 290 },
  { month: "Oct", desktop: 210,  mobile: 190, others: 320 },
  { month: "Nov", desktop: 239,  mobile: 230, others: 300 },
  { month: "Dec", desktop: 240,  mobile: 360, others: 190 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#A700FF",
  },
  mobile: {
    label: "Mobile",
    color: "#EF4444",
  },
  others: {
    label: "Others",
    color: "#3CD856",
  },
} satisfies ChartConfig

function LineChartComponent() {
  return (
    <ChartContainer config={chartConfig} style={{ width: '100%', height: '200px' }}>
    <LineChart
      accessibilityLayer
      data={chartData}
      margin={{
        top: 0,
        right: 0,
        left: -60,
        bottom: 0,
      }}
    >
      <CartesianGrid vertical={false} />
      <XAxis
        dataKey="month"
        tickLine={false}
        axisLine={false}
        tickFormatter={(value) => value.slice(0, 3)}
      />
      <YAxis
        tickLine={false}
        axisLine={false}
        tickMargin={8}
      />
      <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
      <Line
        dataKey="desktop"
        type="monotone"
        stroke="var(--color-desktop)"
        strokeWidth={2}
        dot={false}
      />
      <Line
        dataKey="mobile"
        type="monotone"
        stroke="var(--color-mobile)"
        strokeWidth={2}
        dot={false}
      />
      <Line
        dataKey="others"
        type="monotone"
        stroke="var(--color-others)"
        strokeWidth={2}
        dot={false}
      />
    </LineChart>
  </ChartContainer>
  )
}

export default LineChartComponent