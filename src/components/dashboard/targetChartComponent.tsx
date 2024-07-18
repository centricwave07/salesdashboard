"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#4AB58E",
  },
  mobile: {
    label: "Mobile",
    color: "#FFCF00",
  },
} satisfies ChartConfig

function TargetChartComponent() {
  return (
    <ChartContainer config={chartConfig}>
      <BarChart accessibilityLayer data={chartData} margin={{
        top: 5,
        right: 0,
        left: -60,
        bottom: 5,
      }}>
        <XAxis
          dataKey="month"
          tick={false}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          tick={false}
          tickLine={false}
          axisLine={false}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent />}
        />
        <Bar dataKey="desktop" fill="#4AB58E" radius={4} />
        <Bar dataKey="mobile" fill="#FFCF00" radius={4} />
      </BarChart>
    </ChartContainer>

  )
}

export default TargetChartComponent