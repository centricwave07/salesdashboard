'use client'

import {
  BarChart2,
  LayoutDashboardIcon,
  LineChart,
  LogOut,
  MessageSquareMore,
  Settings,
  ShoppingBag,
  ShoppingCart,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'
import Header from './header'

interface MenuInterface {
  title: string
  url: string
  pathname: string
  icon: any
}
const menu: MenuInterface[] = [
  {
    title: 'Dashboard',
    pathname: 'dashboard',
    url: '/dashboard',
    icon: "images/sidebar/dashboard.svg",
  },
  {
    title: 'Leaderboard',
    pathname: 'leaderboard',
    url: '/leaderboard',
    icon: "images/sidebar/bar.svg",
  },
  {
    title: 'Order',
    pathname: 'order',
    url: '/order',
    icon: "images/sidebar/order.svg",
  },
  {
    title: 'Products',
    pathname: 'products',
    url: '/products',
    icon: "images/sidebar/products.svg",
  },
  {
    title: 'Sales Report',
    pathname: 'sales-report',
    url: '/sales-report',
    icon: "images/sidebar/salesReport.svg",
  },
  {
    title: 'Messages',
    pathname: 'messages',
    url: '/messages',
    icon: "images/sidebar/message.svg",
  },
  {
    title: 'Settings',
    pathname: 'settings',
    url: '/settings',
    icon: "images/sidebar/settings.svg",
  },
  {
    title: 'Sign Out',
    pathname: 'sign-out',
    url: '/sign-out',
    icon: "images/sidebar/logout.svg",
  },
]

function SidebarComponent(props: any) {
  const pathname = usePathname().split('/')[1]
  return (
    <div>
      <div className="flex">
        {/* Sidebar Section */}
        <aside
          id="logo-sidebar"
          className="fixed top-0 left-0 bottom-0 z-40 xl:w-[345px] w-[300px] h-full overflow-y-auto flex flex-col justify-between bg-white"
          aria-label="Sidebar"
        >
          <div className="flex justify-center items-center w-full py-[40px]">
            <Link href="/" className="flex gap-x-[14px] ">
              <div className="bg-[#5D5FEF] flex justify-center items-center p-[15.75px] rounded-[8px]">
                <Image
                  src="/images/logo.svg"
                  alt="logo"
                  height={24}
                  width={24}
                  className="h-6"
                />
              </div>
              <span className="self-center text-3xl leading-[45px] font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                Dabang
              </span>
            </Link>
          </div>
          <div className="h-full px-[46px] pb-4 bg-white dark:bg-gray-800 flex flex-col justify-between">
            <ul className="space-y-2 font-medium">
              {menu?.map((o) => {
                return (
                  <li key={o.title}>
                    <Link
                      href={o.url}
                      className={`flex items-center px-6 py-4
                          group ${
                        pathname === o.pathname
                          ? 'text-white rounded-lg bg-[#5D5FEF] dark:hover:bg-gray-700'
                          : 'text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <Image src={o.icon} alt={o.title} height={32} width={32} className="mr-6 h-8 w-8" />
                      <span className="ms-3 capitalize text-lg leading-[27px]">{o.title}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <div
              className="bg-cover bg-center  w-[238px] h-[261px] my-10 flex flex-col justify-center items-center px-[30px] py-[46px] text-center rounded-[8px] text-white"
              style={{ backgroundImage: "url('images/proBackground.svg')" }}
            >
              <div className="bg-white flex justify-center items-center p-[15.75px] rounded-[8px]">
                <Image
                  src="/images/logo-purple.svg"
                  alt="logo"
                  height={24}
                  width={24}
                  className="h-6"
                />
              </div>
              <div className="mt-2 text-xl leading-[32px] font-semibold">
                Dabang Pro
              </div>
              <div className="mt2 text-xs leading-4 font-medium">
                Get access to all features on tetumbas
              </div>
              <Button
                className="text-[#5D5FEF] mt-8 text-base font-semibold leading-6"
                variant={'secondary'}
              >
                Get Pro
              </Button>
            </div>
          </div>
        </aside>

        {/* Header Section */}
        <Header />
      </div>

      {/* Main Section */}
      <div className="p-8 xl:ml-[345px] ml-[300px] mt-[120px] bg-[#F8F9FA] min-h-[calc(100vh-130px)] h-auto w-auto">
        {props.pages}
      </div>
    </div>
  )
}

export default SidebarComponent
