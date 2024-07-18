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
    color: "#0095FF",
  },
  mobile: {
    label: "Mobile",
    color: "#00E096",
  },
} satisfies ChartConfig

function BarChartComponent() {
  return (
    <ChartContainer config={chartConfig} style={{height: "250px", width: "100%"}}>
      <BarChart accessibilityLayer data={chartData}
        margin={{
          top: 0,
          right: 0,
          left: -60,
          bottom: 0,
        }}
        barSize={12}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          tickMargin={0}
          tickLine={false}
          axisLine={false}
          // padding={{ top: 100 }} 
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent />}
        />
        <Bar dataKey="desktop" fill="#0095FF" radius={4} />
        <Bar dataKey="mobile" fill="#00E096" radius={4} />
      </BarChart>
    </ChartContainer>

  )
}

export default BarChartComponent