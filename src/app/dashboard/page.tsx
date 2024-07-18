'use client'

import { Button } from '@/components/ui/button'
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
  BriefcaseBusiness,
  Ticket,
} from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const LineChartComponent = dynamic(
  () => import('@/components/dashboard/lineChartComponent'),
  { ssr: false },
)
const BarChartComponent = dynamic(
  () => import('@/components/dashboard/barChartComponent'),
  { ssr: false },
)
const SynchronizedLineChartComponent = dynamic(
  () => import('@/components/dashboard/synchronizedLineChart'),
  { ssr: false },
)
const TargetChartComponent = dynamic(
  () => import('@/components/dashboard/targetChartComponent'),
  { ssr: false },
)
const TopProducts = dynamic(
  () => import('@/components/dashboard/topProducts'),
  { ssr: false },
)
const MapCountryChart = dynamic(
  () => import('@/components/dashboard/mapCountryChart'),
  { ssr: false },
)
const VolumeServiceChart = dynamic(
  () => import('@/components/dashboard/volumeServiceChart'),
  { ssr: false },
)

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
    icon: '/images/salesIcon.svg',
    count: '$1K',
    title: 'Total Sales',
    description: '+8% from yesterday',
    iconBgColor: '#FA5A7D',
    bgColor: '#FFE2E5',
  },
  {
    icon: '/images/fileIcon.svg',
    count: '300',
    title: 'Total Order',
    description: '+5% from yesterday',
    iconBgColor: '#FF947A',
    bgColor: '#FFF4DE',
  },
  {
    icon: '/images/tagIcon.svg',
    count: '5',
    title: 'Product Sold',
    description: '+1,2% from yesterday',
    iconBgColor: '#3CD856',
    bgColor: '#DCFCE7',
  },
  {
    icon: '/images/userIcon.svg',
    count: '8',
    title: 'New Customers',
    description: '0,5% from yesterday',
    iconBgColor: '#BF83FF',
    bgColor: '#F3E8FF',
  },
]
function Dashboard() {
  return (
    <div className="flex flex-col gap-8">
      <div className="2xl:flex flex-none gap-8 w-full">
        <DashboardCard className="2xl:w-3/5 w-full">
          <DashboardCardHeader>
            <DashboardCardTitle>
              <div className="flex justify-between">
                <div className="text-xl leading-8 font-semibold text-[#05004E]">
                  {"Today's Sales"}
                </div>
                <div>
                  <Button variant="outline" className="gap-x-[2.3px]">
                    <Image
                      src="/images/exportIcon.svg"
                      alt="export"
                      height={16}
                      width={16}
                      className="h-4 w-4"
                    />
                    <span className="text-sm leading-5 text-[#0F3659]">
                      Export
                    </span>
                  </Button>
                </div>
              </div>
            </DashboardCardTitle>
            <DashboardCardDescription>
              <div className="text-base font-normal leading-[30px] text-[#737791]">
                Sales Summary
              </div>
            </DashboardCardDescription>
          </DashboardCardHeader>
          <DashboardCardContent className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-4 grid-cols-2 xl:gap-8 gap-2">
            {dashboards?.map((o, i) => {
              return (
                <div key={i}>
                  <Card
                    className={`border-0 lg:max-w-[180px] max-w-auto w-auto h-full`}
                    style={{ backgroundColor: o.bgColor }}
                  >
                    <CardHeader>
                      <CardTitle>
                        <div
                          className={`rounded-full p-[10px] h-10 w-10`}
                          style={{ backgroundColor: o.iconBgColor }}
                        >
                          <Image
                            src={o.icon}
                            alt="sdsd"
                            height={18}
                            width={18}
                            className="h-5 w-5 rounded"
                          />
                        </div>
                      </CardTitle>
                      <CardDescription>
                        <div className="text-2xl leading-8 font-semibold text-[#151D48] mt-4">
                          {o.count}
                        </div>
                        <div className="text-base leading-6 font-medium text-[#425166] mt-2">
                          {o.title}
                        </div>
                        <div className="text-xs leading-4 font-medium text-[#4079ED] mt-2">
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
        <DashboardCard className="2xl:w-2/5 w-full 2xl:mt-0 mt-8 ">
          <DashboardCardHeader>
            <DashboardCardTitle>
              <div className="text-xl leading-8 font-semibold text-[#05004E]">
                Visitor Insights
              </div>
            </DashboardCardTitle>
          </DashboardCardHeader>
          <DashboardCardContent>
            <LineChartComponent />
            <div className="sm:flex flex-none justify-center items-center gap-x-10 py-4">
              <div className="flex gap-x-1 items-center">
                <div className="bg-[#A700FF] rounded h-[11px] w-[11px]"></div>
                <div className="text-[#222B45] text-xs">Loyal Customers</div>
              </div>
              <div className="flex gap-x-1 items-center">
                <div className="bg-[#EF4444] rounded h-[11px] w-[11px]"></div>
                <div className="text-[#222B45] text-xs">New Customers</div>
              </div>
              <div className="flex gap-x-1 items-center">
                <div className="bg-[#3CD856] rounded h-[11px] w-[11px]"></div>
                <div className="text-[#222B45] text-xs">Unique Customers</div>
              </div>
            </div>
          </DashboardCardContent>
        </DashboardCard>
      </div>

      {/* ------------------------------------------------------ */}
      <div className="grid 2xl:grid-cols-4 lg:grid-cols-2 grid-cols-1  gap-8">
        <DashboardCard className="w-full lg:col-span-2 col-span-full">
          <DashboardCardHeader>
            <DashboardCardTitle>
              <div className="text-xl leading-8 font-semibold text-[#05004E]">
                Total Revenue
              </div>
            </DashboardCardTitle>
          </DashboardCardHeader>
          <DashboardCardContent>
            <BarChartComponent />
            <div className="flex justify-center items-center gap-x-10">
              <div className="flex gap-x-1 items-center">
                <div className="bg-[#0095FF] rounded-full h-[11px] w-[11px]"></div>
                <div className="text-[#222B45] text-xs">Online Sales</div>
              </div>
              <div className="flex gap-x-1 items-center">
                <div className="bg-[#00E096] rounded-full h-[11px] w-[11px]"></div>
                <div className="text-[#222B45] text-xs">Offline Sales</div>
              </div>
            </div>
          </DashboardCardContent>
        </DashboardCard>

        <DashboardCard className="w-full lg:col-span-1 col-span-full">
          <DashboardCardHeader>
            <DashboardCardTitle>
              <div className="text-xl leading-8 font-semibold text-[#05004E]">
                Customer Satisfaction
              </div>
            </DashboardCardTitle>
          </DashboardCardHeader>
          <DashboardCardContent>
            <SynchronizedLineChartComponent />
            <Separator />
            <div className="flex h-5 justify-center w-full items-center space-x-4 text-sm mt-8">
              <div>
                <div className="flex gap-x-2 items-center">
                  <div>
                    <Image
                      src="/images/blueIndicator.svg"
                      alt="last month"
                      height={9}
                      width={19}
                      className='h-auto w-auto'
                    />
                  </div>
                  <div className="sm:text-base text-sm sm:leading-[30px] leading-[15px] text-[#96A5B8]">
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
                      className='h-auto w-auto'
                    />
                  </div>
                  <div className="sm:text-base text-sm sm:leading-[30px] leading-[15px] text-[#96A5B8]">
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

        <DashboardCard className="w-full lg:col-span-1 col-span-full">
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

        {/* --------------------------------------------- */}
        <DashboardCard className="w-full lg:col-span-2 col-span-full">
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

        <DashboardCard className="w-full lg:col-span-1 col-span-full">
          <DashboardCardHeader>
            <DashboardCardTitle>
              <div className="text-xl leading-8 font-semibold text-[#05004E]">
                Sales Mapping by Country
              </div>
            </DashboardCardTitle>
          </DashboardCardHeader>
          <DashboardCardContent>
          {/* <MapCountryChart />  */}
            <div className="flex justify-center items-center h-full">
              <Image
                src="images/countryMap.svg"
                alt="country"
                width={380}
                height={230}
                className="mt-1"
              />
            </div>
          </DashboardCardContent>
        </DashboardCard>

        <DashboardCard className="w-full lg:col-span-1 col-span-full">
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
      </div>

    </div>
  )
}

export default Dashboard
