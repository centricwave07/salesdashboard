'use client'

import {
  BarChart2,
  Bell,
  ChevronDown,
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
import { Input } from './input'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './dropdown-menu'
import { Button } from './button'

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
    icon: LayoutDashboardIcon,
  },
  {
    title: 'Leaderboard',
    pathname: 'leaderboard',
    url: '/leaderboard',
    icon: BarChart2,
  },
  {
    title: 'Order',
    pathname: 'order',
    url: '/order',
    icon: ShoppingCart,
  },
  {
    title: 'Products',
    pathname: 'products',
    url: '/products',
    icon: ShoppingBag,
  },
  {
    title: 'Sales Report',
    pathname: 'sales-report',
    url: '/sales-report',
    icon: LineChart,
  },
  {
    title: 'Messages',
    pathname: 'messages',
    url: '/messages',
    icon: MessageSquareMore,
  },
  {
    title: 'Settings',
    pathname: 'settings',
    url: '/settings',
    icon: Settings,
  },
  {
    title: 'Sign Out',
    pathname: 'sign-out',
    url: '/sign-out',
    icon: LogOut,
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
          className="fixed top-0 left-0 z-40 w-[345px] h-full  flex flex-col justify-between transition-transform -translate-x-full bg-white shadow-md sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
          aria-label="Sidebar"
        >
          <div className="flex justify-center items-center w-full py-[50px]">
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
                      className={`flex items-center p-2  group ${
                        pathname === o.pathname
                          ? 'text-white rounded-lg bg-[#5D5FEF] dark:hover:bg-gray-700'
                          : 'text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <o.icon className="mr-2 h-4 w-4" />
                      <span className="ms-3 capitalize">{o.title}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-[#5D5FEF]  w-[238px] h-[261px] my-10 flex flex-col justify-center items-center px-[30px] py-[46px] text-center rounded-[8px] text-white">
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
              <Button className='text-[#5D5FEF] mt-8 text-base font-semibold leading-6' variant={'secondary'}>Get Pro</Button>
            </div>
          </div>
        </aside>

        {/* Header Section */}
        <nav className="ml-[345px] fixed top-0 z-50 w-[calc(100%-345px)] bg-white shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="grid grid-cols-3 py-[30px] px-10 gap-x-2">
            <div className="text-4xl leading-[50.4px] font-semibold flex items-center">
              Dashboard
            </div>
            <div className="flex items-center">
              <Input placeholder="Search here..." />
            </div>
            <div className="flex items-center justify-end gap-x-[14px]">
              <div className="flex items-center justify-between gap-x-[14px]">
                <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <div className="flex gap-x-[14px]">
                        <Image
                          src="/images/englishLogo.svg"
                          alt="en"
                          height={20}
                          width={20}
                        />
                        Eng(US)
                        <ChevronDown />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Language</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>It</DropdownMenuItem>
                      <DropdownMenuItem>Hin</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="flex gap-x-[14px] pl-[10px] items-center justify-center">
                  <div className="bg-[#FFFAF1] rounded-[8px] h-12 w-12 relative">
                    <div>
                      <div className="absolute right-0 h-2 w-2 rounded-full bg-[#EB5757] m-1"></div>
                    </div>
                    <div className="flex justify-center items-center h-full">
                      <Bell className="text-[#FFA412]" />
                    </div>
                  </div>
                  <div className="flex gap-x-[14px]">
                    <Image
                      src="/images/user.jpeg"
                      alt="profile"
                      height={30}
                      width={30}
                      className="rounded-[8px] h-[60px] w-[60px]"
                    />
                    <div className="flex flex-col justify-center">
                      <div>
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <div className="flex gap-x-[14px]">
                              <div className="text-base font-medium">Komal</div>
                              <ChevronDown />
                            </div>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuLabel>Profile</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Setting</DropdownMenuItem>
                            <DropdownMenuItem>Status</DropdownMenuItem>
                            <DropdownMenuItem>Update Password</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <div className="text-sm font-normal">Admin</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Section */}
      <div className="p-8 ml-[345px] mt-[120px] bg-[#F8F9FA] min-h-[calc(100vh-130px)] h-auto">
        {props.pages}
      </div>
    </div>
  )
}

export default SidebarComponent
