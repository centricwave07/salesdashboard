'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'
import Header from './header'
import { menu } from '@/data/menu'
import { DiamondPercent } from 'lucide-react'

function SidebarComponent(props: any) {
  const pathname = usePathname().split('/')[1]
  return (
    <div>
      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="flex bg-card">
          {/* Sidebar Section */}
          <aside
            id="logo-sidebar"
            className="fixed top-0 left-0 bottom-0 z-40 xl:w-[345px] w-[200px] h-full overflow-y-auto flex flex-col justify-between bg-card"
            aria-label="Sidebar"
          >
            <div className="flex justify-center items-center w-full py-[40px]">
              <Link href="/" className="flex gap-x-[14px] ">
                <div className="bg-primary flex justify-center items-center p-[15.75px] rounded-[8px]">
                  <DiamondPercent className="text-activeText h-6 w-6" />
                </div>
                <span className="self-center text-3xl leading-[45px] font-semibold sm:text-2xl whitespace-nowrap">
                  DashFlow
                </span>
              </Link>
            </div>
            <div className="h-full 2xl:px-[46px] px-[23px] lg:pb-4 pb-2 bg-card flex flex-col justify-between">
              <ul className="space-y-2 font-medium">
                {menu?.map((o) => {
                  return (
                    <li key={o.title}>
                      <Link
                        href={o.url}
                        className={`flex items-center 2xl:px-6 lg:px-3 px-1 2xl:py-4 lg:py-2 py-1
                          group ${pathname === o.pathname
                            ? 'text-activeText rounded-lg bg-primary dark:hover:bg-gray-700'
                            : 'text-text rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
                      >
                        <o.icon
                          className={`${pathname === o.pathname
                              ? 'text-activeText'
                              : 'text-text'
                            }, mr-2 h-4 w-4`}
                        />
                        <span className="2xl:ms-3 lg:ms-2 ms-1 capitalize xl:text-lg lg:text-base text-sm leading-[27px]">
                          {o.title}
                        </span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="flex justify-center items-center bg-card">
              <div
                className="bg-primary bg-cover bg-center 2xl:w-[238px] w-[180px] h-[261px] my-10 flex flex-col justify-center items-center px-[30px] py-[46px] text-center rounded-[20px] text-white"
                // style={{ backgroundImage: "url('images/proBackground.svg')" }}
              >
                <div className="bg-primary flex justify-center items-center p-[15.75px] rounded-[8px] shadow-2xl border border-activeText">
                  <DiamondPercent className="text-activeText h-6 w-6" />
                </div>
                <div className="mt-2 text-xl leading-[32px] font-semibold text-activeText">
                  DashFlow Pro
                </div>
                <div className="mt2 text-xs leading-4 font-medium  text-activeText">
                  Get access to all features on tetumbas
                </div>
                <Button
                  className="text-text mt-8 text-base font-semibold leading-6"
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
        <div className="p-8 xl:ml-[345px] ml-[200px] 2xl:mt-[120px] mt-[150px] bg-background min-h-[calc(100vh-130px)] h-auto w-auto">
          {props.pages}
        </div>
      </div>

      {/* Mobile View */}
      <Header />
      <div className="md:hidden block p-4 bg-background pt-[120px] min-h-screen h-screen">
        {props.pages}
      </div>
    </div>
  )
}

export default SidebarComponent
