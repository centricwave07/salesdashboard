'use client'

import { Button } from '@/components/ui/button'
import LineChartComponent from '@/components/dashboard/lineChartComponent'
import BarChartComponent from '@/components/dashboard/barChartComponent'
import SynchronizedLineChartComponent from '@/components/dashboard/synchronizedLineChart'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  DashboardCard,
  DashboardCardContent,
  DashboardCardDescription,
  DashboardCardHeader,
  DashboardCardTitle,
} from '@/components/dashboard/dashboardCard'
import {
  BarChart,
  BriefcaseBusiness,
  Download,
  FileText,
  Tag,
  Ticket,
  UserRoundPlus,
} from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import TargetChartComponent from '@/components/dashboard/targetChartComponent'
import TopProducts from '@/components/dashboard/topProducts'
import MapCountryChart from '@/components/dashboard/mapCountryChart'
import VolumeServiceChart from '@/components/dashboard/volumeServiceChart'
interface DataInterface {
  icon: any
  count: string
  title: string
  description: string
  iconBgColor: string
  bgColor: string
}

const dashboards: DataInterface[] = [
  {
    icon: BarChart,
    count: '1K',
    title: 'Total Sales',
    description: '+8% from yesterday',
    iconBgColor: '#FA5A7D',
    bgColor: '#FFE2E5',
  },
  {
    icon: FileText,
    count: '1K',
    title: 'Total Sales',
    description: '+8% from yesterday',
    iconBgColor: '#FF947A',
    bgColor: '#FFF4DE',
  },
  {
    icon: Tag,
    count: '1K',
    title: 'Total Sales',
    description: '+8% from yesterday',
    iconBgColor: '#3CD856',
    bgColor: '#DCFCE7',
  },
  {
    icon: UserRoundPlus,
    count: '1K',
    title: 'Total Sales',
    description: '+8% from yesterday',
    iconBgColor: '#BF83FF',
    bgColor: '#F3E8FF',
  },
]
function Dashboard() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-x-8">
        <DashboardCard className="w-auto">
          <DashboardCardHeader>
            <DashboardCardTitle>
              <div className="flex justify-between">
                <div className="text-xl leading-8 font-semibold text-[#05004E]">
                  {"Today's Sales"}
                </div>
                <div>
                  <Button variant="outline">
                    <Download /> Export
                  </Button>
                </div>
              </div>
            </DashboardCardTitle>
            <DashboardCardDescription>
              <div className="text-base font-normal leading-[30px]">
                Sales Summary
              </div>
            </DashboardCardDescription>
          </DashboardCardHeader>
          <DashboardCardContent className="flex gap-x-8">
            {dashboards?.map((o, i) => {
              return (
                <div key={i}>
                  <Card
                    className={`border-0 max-w-[180px]`}
                    style={{ backgroundColor: o.bgColor }}
                  >
                    <CardHeader>
                      <CardTitle>
                        <div
                          className={`rounded-full p-[10px] h-10 w-10`}
                          style={{ backgroundColor: o.iconBgColor }}
                        >
                          <o.icon className="bg-white h-5 w-5 rounded" />
                        </div>
                      </CardTitle>
                      <CardDescription>
                        <div className="text-2xl font-semibold text-[#151D48] mt-4">
                          {o.count}
                        </div>
                        <div className="text-base font-medium text-[#425166] mt-2">
                          {o.title}
                        </div>
                        <div className="text-xs font-medium text-[#4079ED] mt-2">
                          {o.description}
                        </div>
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              )
            })}
          </DashboardCardContent>
        </DashboardCard>
        <DashboardCard>
          <DashboardCardHeader>
            <DashboardCardTitle>
              <div className="text-xl leading-8 font-semibold text-[#05004E]">
                Visitor Insights
              </div>
            </DashboardCardTitle>
          </DashboardCardHeader>
          <DashboardCardContent>
            <LineChartComponent />
          </DashboardCardContent>
        </DashboardCard>
      </div>

      {/* ------------------------------------------------------ */}
      <div className="flex gap-x-2">
        <DashboardCard className="w-auto">
          <DashboardCardHeader>
            <DashboardCardTitle>
              <div className="text-xl leading-8 font-semibold text-[#05004E]">
                Visitor Insights
              </div>
            </DashboardCardTitle>
          </DashboardCardHeader>
          <DashboardCardContent>
            <BarChartComponent />
          </DashboardCardContent>
        </DashboardCard>

        <DashboardCard className="w-auto">
          <DashboardCardHeader>
            <DashboardCardTitle>
              <div className="text-xl leading-8 font-semibold text-[#05004E]">
                Customer Satisfaction
              </div>
            </DashboardCardTitle>
          </DashboardCardHeader>
          <DashboardCardContent>
            <SynchronizedLineChartComponent />
            <Separator className="my-4" />
            <div className="flex h-5 justify-center w-full items-center space-x-4 text-sm">
              <div>
                <div className="flex gap-x-2 items-center">
                  <div>
                    <Image
                      src="/images/blueIndicator.svg"
                      alt="last month"
                      height={9}
                      width={19}
                    />
                  </div>
                  <div className="text-base leading-[30px] text-[#96A5B8]">
                    Last Month
                  </div>
                </div>
                <div className="flex justify-center text-sm font-medium">
                  $ 3,004
                </div>
              </div>
              <Separator orientation="vertical" />
              <div>
                <div className="flex gap-x-2 items-center">
                  <div>
                    <Image
                      src="/images/blueIndicator.svg"
                      alt="last month"
                      height={9}
                      width={19}
                    />
                  </div>
                  <div className="text-base leading-[30px] text-[#96A5B8]">
                    Last Month
                  </div>
                </div>
                <div className="flex justify-center text-sm font-medium">
                  $ 3,004
                </div>
              </div>
            </div>
          </DashboardCardContent>
        </DashboardCard>

        <DashboardCard className="w-auto">
          <DashboardCardHeader>
            <DashboardCardTitle>
              <div className="text-xl leading-8 font-semibold text-[#05004E]">
                Target vs Reality
              </div>
            </DashboardCardTitle>
          </DashboardCardHeader>
          <DashboardCardContent>
            <TargetChartComponent />
            <div className="flex items-center justify-between">
              <div className="flex gap-x-[10px] items-center w-2/4">
                <div className="bg-[#E2FFF3] h-[29px] w-[29px] flex justify-center items-center rounded-[8px]">
                  <BriefcaseBusiness className="h-[18px] w-[18px] text-[#4AB58E]" />
                </div>
                <div>
                  <div className="text-xs font-semibold leading-4">
                    Reality Sales
                  </div>
                  <div className="text-[10px] text-[#737791] font-normal">
                    Global
                  </div>
                </div>
              </div>
              <div className="text-sm leading-5 font-medium text-[#27AE60] w-2/4 text-left">
                8.823
              </div>
            </div>
            <div className="flex items-center justify-between mt-[15px]">
              <div className="flex gap-x-[10px] items-center w-2/4">
                <div className="bg-[#FFF4DE] h-[29px] w-[29px] flex justify-center items-center rounded-[8px]">
                  <Ticket className="h-[18px] w-[18px] text-[#FFA800]" />
                </div>
                <div>
                  <div className="text-xs font-semibold leading-4">
                    Target Sales
                  </div>
                  <div className="text-[10px] text-[#737791] font-normal">
                    Commercial
                  </div>
                </div>
              </div>
              <div className="text-sm leading-5 font-medium text-[#FFA412] w-2/4 text-left">
                8.823
              </div>
            </div>
          </DashboardCardContent>
        </DashboardCard>
      </div>

      {/* ------------------------------------------------------ */}
      {/* <div className="flex gap-x-2">
        <DashboardCard className="w-[645px]">
          <DashboardCardHeader>
            <DashboardCardTitle>
              <div className="text-xl leading-8 font-semibold text-[#05004E]">
                Top Products
              </div>
            </DashboardCardTitle>
          </DashboardCardHeader>
          <DashboardCardContent>
            <TopProducts />
          </DashboardCardContent>
        </DashboardCard>

        <DashboardCard className="w-[420px]">
          <DashboardCardHeader>
            <DashboardCardTitle>
              <div className="text-xl leading-8 font-semibold text-[#05004E]">
                Sales Mapping by Country
              </div>
            </DashboardCardTitle>
          </DashboardCardHeader>
          <DashboardCardContent>
            <MapCountryChart />
          </DashboardCardContent>
        </DashboardCard>

        <DashboardCard className="w-auto">
          <DashboardCardHeader>
            <DashboardCardTitle>
              <div className="text-xl leading-8 font-semibold text-[#05004E]">
                Volume vs Service Level
              </div>
            </DashboardCardTitle>
          </DashboardCardHeader>
          <DashboardCardContent>
            <VolumeServiceChart />
            <Separator className="my-4" />
            <div className="flex h-5 justify-center w-full items-center space-x-4 text-sm">
              <div>
                <div className="flex gap-x-2 items-center">
                  <div className="h-[10px] w-[10px] bg-[#0095FF] rounded-full"></div>
                  <div className="text-base leading-[30px] text-[#96A5B8]">
                    Volume
                  </div>
                </div>
                <div className="flex justify-center text-sm font-medium">
                  1,135
                </div>
              </div>
              <Separator orientation="vertical" />
              <div>
                <div className="flex gap-x-2 items-center">
                  <div className="h-[10px] w-[10px] bg-[#00E096] rounded-full"></div>
                  <div className="text-base leading-[30px] text-[#96A5B8]">
                    Services
                  </div>
                </div>
                <div className="flex justify-center text-sm font-medium">
                  635
                </div>
              </div>
            </div>
          </DashboardCardContent>
        </DashboardCard>
      </div> */}
    </div>
  )
}

export default Dashboard
