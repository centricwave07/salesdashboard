"use client"

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
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
const CustomDot = (props: any) => {
  const { cx, cy, stroke, payload, value, fill } = props
  return (
    <circle cx={cx} cy={cy} r={4} stroke={stroke} strokeWidth={2} fill={fill} />
  )
}
function SynchronizedLineChartComponent() {
  return (
    <ChartContainer config={chartConfig}>
      <AreaChart
        accessibilityLayer
        data={chartData}
        margin={{
          top: 0,
          right: 0,
          left: -60,
          bottom: 0,
        }}
      >
        {/* <CartesianGrid vertical={false} /> */}
        <CartesianGrid vertical={false} horizontal={false} />
        <XAxis
          dataKey="month"
          tick={false}
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <defs>
          <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="#0095FF"
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor="#0095FF"
              stopOpacity={0.1}
            />
          </linearGradient>
          <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="#00E096"
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor="#00E096"
              stopOpacity={0.1}
            />
          </linearGradient>
        </defs>
        <Area
          dataKey="mobile"
          type="natural"
          fill="url(#fillMobile)"
          fillOpacity={0.4}
          stroke="#00E096"
          stackId="a"
          dot={<CustomDot fill="#00E096" />}
        />
        <Area
          dataKey="desktop"
          type="natural"
          fill="url(#fillDesktop)"
          fillOpacity={0.4}
          stroke="#0095FF"
          stackId="a"
          dot={<CustomDot fill="#0095FF" />}
        />
      </AreaChart>
    </ChartContainer>
  )
}

export default SynchronizedLineChartComponent
